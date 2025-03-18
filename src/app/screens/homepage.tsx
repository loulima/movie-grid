'use client';

import { useState, useEffect, ReactElement } from 'react';
import { Base } from '../components/Base';
import { MovieCarousel } from '../components/MovieCarousel';
import { getTopRatedMovies, getNowPlayingMovies, getUpcomingMovies } from '../services/fetchMovies';
import { SectionDivider } from '../components/SectionDivider';
import { useSearch } from '@/context/SearchContext';
import { MovieCard } from '../components/MovieCard';

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  overview: string;
};

export const Homepage = (): ReactElement => {
  const { searchTerm } = useSearch();
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    getTopRatedMovies().then(setTopRated);
    getNowPlayingMovies().then(setNowPlaying);
    getUpcomingMovies().then(setUpcoming);
  }, []);

  const allMovies = [...topRated, ...nowPlaying, ...upcoming];
  const filteredMovies = allMovies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const uniqueFilteredMovies = Array.from(new Map(filteredMovies.map((movie) => [movie.id, movie])).values());

  return (
    <Base>
      {searchTerm ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {filteredMovies.length > 0 ? (
            Array.from(new Map(filteredMovies.map((movie) => [movie.id, movie])).values()).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="text-center text-gray-500">Nenhum filme encontrado.</p>
          )}
        </div>
      ) : (
        <>
          <SectionDivider title="mais bem avaliados" />
          <MovieCarousel movies={topRated} />

          <SectionDivider title="em exibição nos cinemas" />
          <MovieCarousel movies={nowPlaying} />

          <SectionDivider title="próximos lançamentos" />
          <MovieCarousel movies={upcoming} />
        </>
      )}
    </Base>
  );
};
