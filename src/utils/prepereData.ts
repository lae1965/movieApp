// import { fetchPosterUrl } from '../api';
// import { IMAGE_CAP, KINOPOISK_URL } from './constants';
import { KINOPOISK_URL } from './constants';
import { Movie } from './interfaces';

export const prepareMovie = async (movie: any): Promise<Movie> => ({
  id: movie.id,
  title: movie.title,
  yearGenres: `${!!movie.year && movie.year}${
    !!movie.year && !!movie.genres?.length && ', '
  }${!!movie.genres?.length && movie.genres.join(', ')}`,
  director:
    (!!movie.directors?.length && `Режиссёр: ${movie.directors.join(', ')}`) ||
    null,
  actors: !!movie.actors?.length && movie.actors.join(', '),
  description: !!movie.description && movie.description,
  duration: movie.collaps?.duration?.[0],
  posterUrl: `${KINOPOISK_URL}${movie.id_kinopoisk}`,
});

export const prepareMovieList = async (movieList: any[]) => {
  const result = await Promise.all(
    movieList.map(async (movie) => await prepareMovie(movie))
  );

  console.log(result);

  return result;
};
