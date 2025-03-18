'use client';
import { ReactElement } from 'react';

export const Sobre = (): ReactElement => {
  return (
    <div className="p-6 text-black flex flex-col items-center">
      <h1 className=" text-[32px] font-bold font-archivo mb-6">O que é o Cinefilia?</h1>
      <div className="font-rubik text-lg leading-relaxed max-w-3xl text-justify space-y-4">
        <p>
          O <strong>Cinefilia</strong> é um projeto pessoal criado com o propósito de reunir e exibir um catálogo de
          filmes de forma organizada e acessível. A ideia é oferecer aos usuários uma experiência simples e agradável
          para explorar diferentes títulos, divididos em sessões temáticas.
        </p>

        <p>
          Este projeto está em constante desenvolvimento e a proposta é, ao longo do tempo, aprimorar tanto a
          usabilidade quanto as funcionalidades da plataforma. Entre as melhorias previstas estão a adição de{' '}
          <strong>filtros</strong>, <strong>tags</strong> e novas seções que facilitem ainda mais a navegação e a
          descoberta de filmes. 
        </p>
      </div>
    </div>
  );
};
