export enum SortStatus {
  NO_SORTED = 0b00,
  SORTED_BY_NAME = 0b01,
  SORTED_BY_YEAR = 0b10,
}

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
  sortStatus: SortStatus;
  isLoading: boolean;
  error: string;
}
