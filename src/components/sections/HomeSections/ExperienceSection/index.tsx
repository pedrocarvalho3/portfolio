import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building2 } from 'lucide-react';

// Mock data for professional experiences
const experiences = [
  {
    title: 'Desenvolvedor Full Stack',
    company: 'Sistema LIFT',
    period: 'Jan 2023 - Present',
    description:
      'Implementação e manutenção de funcionalidades em sistemas ERP voltados para gestão empresarial.',
    responsibilities: [
      'Colaboração com equipes multidisciplinares para resolver problemas complexos e melhorar a experiência do usuário.',
      'Otimização de performance e usabilidade do sistema, resultando em maior eficiência operacional.',
      'Integração de plataformas de e-commerce via webhooks.',
    ],
    technologies: ['C#', '.NET', 'ASP.NET', 'Node.js', 'SQL Server'],
  },
  {
    title: 'Freelancer - Painel Externo para Integração com Shopify',
    company: 'Projeto Freelancer',
    period: 'Nov 2024 - Jan 2024',
    description:
      'Desenvolvimento de painel para gerenciamento de assinaturas e integração com Shopify.',
    responsibilities: [
      'Planejei e desenvolvi um painel externo para empresas gerenciarem assinaturas, sincronizarem produtos e anunciarem itens em uma loja Shopify.',
      'Integrei o Mercado Pago para pagamentos de assinaturas, permitindo atualizações automáticas de status e transações seguras.',
      'Implementei o NextAuth.js para autenticação de usuários, incluindo login por Magic Link, oferecendo maior acessibilidade.',
      'Desenvolvi o front-end utilizando Next.js, Tailwind CSS e ShadCN UI, garantindo um design moderno e responsivo.',
      'Construí o back-end com Next.js API Routes, Prisma ORM e PostgreSQL, hospedado em um ambiente Docker.',
    ],
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'ShadCN UI',
      'Prisma ORM',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    title: 'Freelancer - Desenvolvimento de E-commerce',
    company: 'Projeto Freelancer',
    period: 'Fev 2023',
    description:
      'Desenvolvimento de uma plataforma de e-commerce utilizando Next.js no front-end e WordPress no back-end.',
    responsibilities: [
      'Desenvolvimento de uma plataforma de e-commerce utilizando Next.js no front-end e WordPress no back-end.',
      'Consumo de dados do WordPress via GraphQL para carregamento dinâmico de produtos.',
      'Design responsivo e otimizado para SEO utilizando Tailwind CSS e ShadCN UI, prototipado no Figma.',
      'Integração de sistemas de pagamento e APIs do Google.',
      'Integração de checkout de pagamento e implementação de sistema de cadastro.',
    ],
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'ShadCN UI',
      'GraphQL',
      'WordPress',
      'Figma',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-400 md:text-4xl">
          Experiência Profissional
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="mt-1 flex items-center text-gray-600">
                      <Building2 className="mr-1 h-4 w-4" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    <CalendarDays className="mr-1 inline h-4 w-4" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{exp.description}</p>
                <h4 className="mb-2 font-semibold text-gray-800">
                  Responsabilidades:
                </h4>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-700">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
