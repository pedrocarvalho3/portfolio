import { Brain } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-5xl font-bold text-white">
          Sobre Mim
        </h2>

        <div className="mx-auto mb-12 flex max-w-7xl flex-col items-center gap-32 md:flex-row">
          <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-lg">
            <Image
              src="/photo-profile.jpeg"
              alt="Minha foto"
              width={256}
              height={50}
              className="rounded-full object-cover object-bottom"
            />
          </div>
          <div className="flex-1 space-y-6 rounded-lg bg-teal-200 p-8 shadow-lg">
            <p className="text-lg">
              Sou um desenvolvedor web apaixonado, com uma jornada profissional
              focada em criar soluções digitais inovadoras e eficientes. Minha
              especialização abrange tanto o desenvolvimento front-end quanto
              back-end, permitindo-me construir aplicações web completas e
              robustas.
            </p>
            <p className="text-lg">
              Minha abordagem ao desenvolvimento web é centrada no usuário,
              priorizando a criação de interfaces intuitivas e experiências
              fluidas. Acredito na importância de combinar design atraente com
              funcionalidade sólida, sempre buscando as melhores práticas e
              tecnologias mais recentes para entregar projetos de alta
              qualidade.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-lg font-semibold text-teal-100">
            <Brain className="mr-2" />
            Sempre em busca de novos desafios e oportunidades de aprendizado!
          </p>
        </div>
      </div>
    </section>
  );
}
