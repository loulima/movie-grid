import { api } from "./api";

export const getPopularMovies = async () => {
  const response = await api.get("/movie/popular");
  return response.data.results;
};

export const getMovieReviews = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  try {
    const response = await api.get("/movie/top_rated");
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes mais bem avaliados:", error);
    return [];
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await api.get("/movie/now_playing");
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes em exibição:", error);
    return [];
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await api.get("/movie/upcoming");
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes futuros:", error);
    return [];
  }
};