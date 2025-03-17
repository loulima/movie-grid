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
    <div className="w-fit  h-[400px] flex flex-col justify-between rounded overflow-hidden">
      <div className="w-full h-[65%] flex items-center justify-center bg-black">
      <Image
          width={300}
          height={300}
          src={imageUrl}
          alt={movie.title}
          className={`${className} object-fill	 w-full h-full`}
        />
      </div>

      <div className="w-full h-full mt-2 text-left font-archivo text-black">
        <h3 className="text-[14px] font-bold">{movie.title}</h3>
        <p className="text-[12px]">Data de lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
  );
};
