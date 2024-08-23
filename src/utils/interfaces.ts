export interface Movie {
  id: number;
  title: string;
  yearGenres: string;
  director: string;
  actors: string;
  description: string;
  duration: string;
  posterUrl: string;
}

export interface State {
  movieList: Movie[];
  singleMovie: Movie;
  isSortedByName: boolean;
  isLoading: boolean;
  error: string;
}

export enum SortStatus {
  NO_SORTED,
  SORTED_BY_NAME,
  SORTED_BY_YEAR,
}
