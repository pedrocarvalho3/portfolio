import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Won Games',
    description:
      'E-commerce completo criado no curso de React Avançado, com funcionalidades como listagem de produtos, carrinho, sistema de pagamentos e painel administrativo, seguindo boas práticas de acessibilidade e performance.',
    technologies: [
      'React',
      'Next.js',
      'GraphQL',
      'Apollo Client',
      'Stripe',
      'TypeScript',
      'Jest',
      'Testing Library',
      'Storybook',
    ],
    githubLink: 'https://github.com/pedrocarvalho3/nextshop-frontend',
    liveLink: '',
  },
  {
    title: 'Painel Externo Integração Shopify',
    description:
      'Painel desenvolvido para empresas gerenciarem assinaturas, sincronizarem produtos e anunciarem itens em lojas Shopify, com integração de pagamentos via Mercado Pago.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'ShadCN UI',
      'Prisma ORM',
      'PostgreSQL',
      'Docker',
      'NextAuth.js',
      'MercadoPago',
    ],
    githubLink: '',
    liveLink: 'https://external-panel-expogesso.vercel.app/',
  },
  {
    title: 'Desenvolvimento de E-commerce',
    description:
      'Plataforma de e-commerce construída com Next.js e WordPress, apresentando um design responsivo e otimizado, com integração de sistemas de pagamento e APIs do Google.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'ShadCN UI',
      'GraphQL',
      'WordPress',
      'Figma',
      'Google APIs',
    ],
    githubLink: '',
    liveLink: 'https://www.rggesso.com/',
  },
  {
    title: 'Daily Diet API Rocketseat Challenge',
    description:
      'API completa para controle de dieta diária, desenvolvida para reforçar conceitos de back-end e expandir conhecimentos em tecnologias modernas.',
    technologies: ['Node.js', 'TypeScript', 'Fastify', 'Knex'],
    githubLink: 'https://github.com/pedrocarvalho3/02-daily-diet-challenge',
    liveLink: 'https://github.com/pedrocarvalho3/02-daily-diet-challenge',
  },
  {
    title: 'Natours',
    description:
      'Site responsivo para uma agência fictícia de turismo, desenvolvido no curso de HTML e CSS Avançado, focado em boas práticas e uso de técnicas modernas de CSS.',
    technologies: ['HTML', 'CSS', 'SCSS'],
    githubLink: 'https://github.com/pedrocarvalho3/natours-interface',
    liveLink: 'https://natuors-interface.netlify.app/',
  },
  {
    title: 'Gerenciador de Games',
    description:
      'Sistema para gestão de games, incluindo categorias e plataformas, desenvolvido na matéria de POO, com foco em modularidade e reutilização de código.',
    technologies: ['Java', 'JavaFX', 'Swing'],
    githubLink: 'https://github.com/pedrocarvalho3/games-java-project',
    liveLink: '',
  },
];

export default function ProjectSection() {
  return (
    <section className="bg-teal-700 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-6xl font-bold text-white md:text-4xl">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between bg-white shadow-lg"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
