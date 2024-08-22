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

export interface IState {
  movieList: Movie[];
  isSortedByName: boolean;
  isLoading: boolean;
  error: string;
}
