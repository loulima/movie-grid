'use client';

import { useState, useEffect, ReactElement } from 'react';
import { Base } from '../components/Base';
import { MovieCarousel } from '../components/MovieCarousel';
import { getTopRatedMovies, getNowPlayingMovies, getUpcomingMovies } from '../services/fetchMovies';
import { SectionDivider } from '../components/SectionDivider';
import { useSearch } from '@/context/SearchContext';
import { MovieCard } from '../components/MovieCard';
import { MovieModal } from '../components/Modal';

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
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null); // Controla o modal

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {filteredMovies.length > 0 ? (
            uniqueFilteredMovies.map((movie) => (
              <div key={movie.id} onClick={() => setSelectedMovie(movie.id)} className="cursor-pointer">
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Nenhum filme encontrado.</p>
          )}
        </div>
      ) : (
        <>
          <SectionDivider title="mais bem avaliados" />
          <MovieCarousel movies={topRated} setSelectedMovie={setSelectedMovie} />

          <SectionDivider title="em exibição nos cinemas" />
          <MovieCarousel movies={nowPlaying} setSelectedMovie={setSelectedMovie} />

          <SectionDivider title="próximos lançamentos" />
          <MovieCarousel movies={upcoming} setSelectedMovie={setSelectedMovie} />
        </>
      )}

      {selectedMovie && <MovieModal movieId={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </Base>
  );
};
