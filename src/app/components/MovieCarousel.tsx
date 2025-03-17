"use client";

import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/customStyles.css"; 
import { MovieCard } from "./MovieCard";

type MovieCarouselProps = {
  title?: string;
  movies: any[];
};

export const MovieCarousel = ({ title, movies }: MovieCarouselProps): ReactElement => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16} // Define espaçamento padrão entre os slides
        slidesPerView={1} // Padrão para telas menores
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 10 }, // Exibir apenas 1 slide abaixo de 480px
          640: { slidesPerView: 2, spaceBetween: 12 }, // 2 slides em telas pequenas
          768: { slidesPerView: 3, spaceBetween: 14 }, // 3 slides no tablet
          1024: { slidesPerView: 4, spaceBetween: 16 }, // 4 slides em telas grandes
          1280: { slidesPerView: 6, spaceBetween: 18 }, // 6 slides em telas muito grandes
        }}
        className="relative w-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="flex justify-center">
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};