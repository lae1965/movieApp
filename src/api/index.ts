import axios from 'axios';
import { MOVIE_LIST_URL, SINGLE_MOVIE_URL } from '../utils/constants';

export const fetchMovieList = async () => {
  try {
    const response = await axios.get(MOVIE_LIST_URL);

    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const fetchSingleMovie = async (id: number) => {
  try {
    const response = await axios.get(`${SINGLE_MOVIE_URL}/${id}`);

    return response.data.data;
  } catch (e) {
    throw e;
  }
};
