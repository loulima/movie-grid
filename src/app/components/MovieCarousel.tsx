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

export const MovieCarousel = ({ title = '', movies }: MovieCarouselProps): ReactElement => {
    return (
      <div className="w-full mb-8 relative">
        <h2 className="text-[18px] font-archivo text-black font-semibold mb-4">{title}</h2>
  
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={6}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            className="relative "
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id} className="flex items-center justify-center">
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
  

        </div>
      </div>
    );
  };