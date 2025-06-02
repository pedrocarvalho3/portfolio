'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

// Sistema simples de cache para rate limiting
type RateLimit = {
  count: number;
  firstAttempt: number;
};

const rateLimits = new Map<string, RateLimit>();

// Configurações de rate limiting
const RATE_LIMIT_DURATION = 24 * 60 * 60 * 1000; // 24 horas em millisegundos
const MAX_EMAILS_PER_DAY = 3; // Máximo de 3 emails por dia por email

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const userLimit = rateLimits.get(email);

  // Se não há registro anterior, criar um novo
  if (!userLimit) {
    rateLimits.set(email, { count: 1, firstAttempt: now });
    return false;
  }

  // Verificar se o período de 24h já passou
  if (now - userLimit.firstAttempt >= RATE_LIMIT_DURATION) {
    // Resetar o contador
    rateLimits.set(email, { count: 1, firstAttempt: now });
    return false;
  }

  // Verificar se excedeu o limite
  if (userLimit.count >= MAX_EMAILS_PER_DAY) {
    return true;
  }

  // Incrementar o contador
  userLimit.count += 1;
  rateLimits.set(email, userLimit);
  return false;
}

// Função para limpar registros antigos (deve ser chamada periodicamente)
function cleanupRateLimits() {
  const now = Date.now();
  for (const [email, limit] of rateLimits.entries()) {
    if (now - limit.firstAttempt >= RATE_LIMIT_DURATION) {
      rateLimits.delete(email);
    }
  }
}

export async function submitContact(formData: FormData) {
  try {
    const validatedFields = schema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, message } = validatedFields.data;

    // Verificar rate limit
    if (isRateLimited(email)) {
      return {
        success: false,
        message:
          'Limite de mensagens diárias excedido. Por favor, tente novamente amanhã.',
      };
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.DESTINATION_EMAIL,
      subject: `Nova mensagem do portfólio de ${name}`,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Limpar registros antigos periodicamente
    cleanupRateLimits();

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!',
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: 'Erro ao enviar a mensagem. Por favor, tente novamente.',
    };
  }
}
