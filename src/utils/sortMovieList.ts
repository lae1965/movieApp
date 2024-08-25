import { Movie, SortStatus } from './interfaces';

export const sortMovieList = (movieList: Movie[], sortStatus: SortStatus) => {
  const isEnglish = (char: string) => /[a-zA-Z]/.test(char);

  switch (sortStatus) {
    case SortStatus.SORTED_BY_NAME:
      return movieList.sort((a: Movie, b: Movie) => {
        const aFirstChar = a.title[0];
        const bFirstChar = b.title[0];
        if (isEnglish(aFirstChar) && isEnglish(bFirstChar))
          return a.title.localeCompare(b.title);
        if (!isEnglish(aFirstChar) && !isEnglish(bFirstChar))
          return a.title.localeCompare(b.title);
        return isEnglish(aFirstChar) ? -1 : 1;
      });
    case SortStatus.SORTED_BY_YEAR:
      return movieList.sort(
        (a: Movie, b: Movie) =>
          +a.yearGenres.split(',')[0] - +b.yearGenres.split(',')[0]
      );
    default:
      return movieList;
  }
};
