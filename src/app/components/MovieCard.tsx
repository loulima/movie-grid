'use client';

import { ReactElement } from 'react';
import Image from 'next/image';

type MovieCardProps = {
  className?: string;
  movie: {
    poster_path: string;
    title: string;
    release_date: string;
  };
};
export const MovieCard = ({ movie, className }: MovieCardProps): ReactElement => {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder.jpg';

  return (
    <div
      className="w-[250px] h-[400px] sm:w-[220px] sm:h-[350px] flex flex-col justify-between rounded-lg overflow-hidden  
  transition-transform duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
    >
      <div className="w-full h-[65%] bg-black flex items-center justify-center">
        <Image
          loading="lazy"
          width={250}
          height={300}
          src={imageUrl}
          alt={movie.title}
          className={`${className} object-cover w-full h-full`}
        />
      </div>

      <div className="w-full h-[35%] text-left font-archivo text-black p-2">
        <h3 className="text-[14px] font-bold">{movie.title}</h3>
        <p className="text-[12px]">Data de lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
  );
};
