'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function IntroSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-[90vh] flex-col items-center justify-center p-4 text-white"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          className="mb-4 text-4xl font-bold md:text-5xl"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          Olá! Sou Pedro Carvalho
        </motion.h1>
        <h2 className="mb-6 text-2xl md:text-3xl">
          <TypeAnimation
            sequence={[
              'Desenvolvedor Web Fullstack',
              2000,
              'Especialista em React & Next.js',
              2000,
              'Criador de Soluções Inovadoras',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <motion.p
          className="mb-6 text-justify text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Sou um desenvolvedor web fullstack com experiência em criar soluções
          inovadoras e escaláveis. Minha paixão é combinar as necessidades do
          cliente com as melhores práticas de desenvolvimento.
        </motion.p>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden text-justify"
        >
          <p className="mb-6 text-lg">
            Ao longo da minha carreira, trabalhei com uma variedade de
            tecnologias, incluindo React, Next.js, Node.js, C#, ASP.NET, bancos
            de dados SQL e Mongo. Tenho um forte foco em oferecer experiências
            intuitivas e funcionais para os usuários, além de garantir um
            desempenho de alto nível para os sistemas que desenvolvo.
          </p>
          <p className="mb-6 text-lg">
            Além disso, tenho experiência em gestão de banco de dados,
            integrações de API, e desenvolvimento de sistemas personalizados,
            com um olhar atento para a otimização de processos e a experiência
            do usuário.
          </p>
          <p className="mb-6 text-lg">
            Se você está procurando um profissional apaixonado por
            desenvolvimento web, com habilidades tanto no front-end quanto no
            back-end, estou aqui para ajudar a transformar suas ideias em
            realidade.
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white px-8 py-4 text-xl font-bold text-teal-600 shadow-lg transition duration-300 hover:bg-teal-100"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Ler Menos' : 'Ler Mais'}
        </motion.button>
      </div>
    </motion.div>
  );
}
