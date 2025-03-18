import axios from 'axios';
import { useState, useEffect } from 'react';

export type Genre = {
  id: number;
  name: string;
};

export type MovieDetails = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  genres: Genre[];
};

export const useMovieDetails = (movieId: number | null) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovie = async () => {
    if (!movieId) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`
      );
      setMovie(response.data);
    } catch (err) {
      setError('Erro ao carregar o filme.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  return { movie, loading, error, refetch: fetchMovie };
};
