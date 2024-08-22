import { KINOPOISK_URL } from './constants';
import { Movie } from './interfaces';

export const prepareMovie = (movie: any): Movie => ({
  id: movie.id,
  title: movie.title,
  yearGenres: `${!!movie.year && movie.year}${
    !!movie.year && !!movie.genres?.length && ', '
  }${!!movie.genres?.length && movie.genres.join(', ')}`,
  director:
    (!!movie.directors?.length && `Режиссёр: ${movie.directors.join(', ')}`) ||
    '',
  actors: (!!movie.actors?.length && movie.actors.join(', ')) || '',
  description: (!!movie.description && movie.description) || '',
  duration:
    (!!movie.collapse?.duration?.[0] && movie.collapse?.duration?.[0]) || '',
  posterUrl: `${KINOPOISK_URL}${movie.id_kinopoisk}.jpg`,
});

export const prepareMovieList = (movieList: any[]) =>
  movieList.map((movie) => prepareMovie(movie));
