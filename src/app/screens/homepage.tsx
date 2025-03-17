'use client';

import { useState, useEffect, ReactElement } from 'react';
import { Base } from '../components/Base';
import { MovieCarousel } from '../components/MovieCarousel';
import { getTopRatedMovies, getNowPlayingMovies, getUpcomingMovies } from '../services/fetchMovies';
import { SectionDivider } from '../components/SectionDivider';

export const Homepage = (): ReactElement => {
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then(setTopRated);
    getNowPlayingMovies().then(setNowPlaying);
    getUpcomingMovies().then(setUpcoming);
  }, []);

  return (
<Base>
      <SectionDivider title="mais bem avaliados" />
      <MovieCarousel movies={topRated} />

      <SectionDivider title="em exibição nos cinemas" />
      <MovieCarousel movies={nowPlaying} />

      <SectionDivider title="próximos lançamentos" />
      <MovieCarousel movies={upcoming} />
    </Base>

  );
};
