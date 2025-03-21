'use client';

import { ReactElement, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/customStyles.css';
import { MovieCard } from './MovieCard';
import { MovieModal } from './Modal';

type MovieCarouselProps = {
  title?: string;
  movies: any[];
  setSelectedMovie: (movieId: number) => void;

};

export const MovieCarousel = ({ title, movies }: MovieCarouselProps): ReactElement => {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 14 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
          1280: { slidesPerView: 6, spaceBetween: 18 }
        }}
        className="relative w-full"
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            onClick={() => setSelectedMovie(movie.id)}
            className="flex justify-center cursor-pointer"
          >
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedMovie && <MovieModal movieId={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
};
