import axios from 'axios';
import { MOVIE_LIST_URL } from '../utils/constants';
// import { KINOPOISK_URL, MOVIE_LIST_URL } from '../utils/constants';

export const fetchMovieList = async () => {
  try {
    const response = await axios.get(MOVIE_LIST_URL);

    return response.data.data;
  } catch (e) {
    throw e;
  }
};

// export const fetchPosterUrl = async (posterId: number) => {
//   try {
//     const response = await axios.get(`${KINOPOISK_URL}${posterId}`, {
//       headers: {
//         'X-API-KEY': 'cc8b1a85-65d8-4c8a-9057-1e979722c210',
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response);
//   } catch {
//     return null;
//   }
// };
