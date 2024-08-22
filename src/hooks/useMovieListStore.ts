import { useStore } from 'vuex';
import { fetchMovieList, fetchSingleMovie } from '../api';
import { prepareMovieList, prepareMovie } from '../utils/prepereData';
import { computed, ref } from 'vue';
import { Movie } from '../utils/interfaces';
import { AxiosError } from 'axios';

export const useMovieListStore = () => {
  const store = useStore();
  const parsedMovieList = ref<Movie[]>([]);
  const parsedMovie = ref<Movie>({
    id: 0,
    title: '',
    yearGenres: '',
    director: '',
    actors: '',
    description: '',
    duration: '',
    posterUrl: '',
  });

  const loadMovieList = async () => {
    try {
      store.dispatch('updateIsLoading', true);
      store.dispatch('updateError', '');
      const movieListApi = await fetchMovieList();
      parsedMovieList.value = prepareMovieList(movieListApi);
      store.dispatch('updateMovieList', parsedMovieList.value);
    } catch (e) {
      store.dispatch('updateError', (e as AxiosError).message);
    } finally {
      store.dispatch('updateIsLoading', false);
    }
  };

  const loadSingleMovie = async (id: number) => {
    try {
      store.dispatch('updateIsLoading', true);
      store.dispatch('updateError', '');
      const singleMovieApi = await fetchSingleMovie(id);
      parsedMovie.value = prepareMovie(singleMovieApi);
      store.dispatch('updateSingleMovie', parsedMovie.value);
      store.dispatch('updateIsLoading', false);
    } catch (e) {
      store.dispatch('updateError', (e as AxiosError).message);
    } finally {
      store.dispatch('updateIsLoading', false);
    }
  };

  return {
    loadMovieList,
    loadSingleMovie,
    getMovieList: () => parsedMovieList.value,
    getSingleMovie: () => parsedMovie.value,
    isLoading: computed(() => store.getters.getIsLoading),
    isError: computed(() => store.getters.getError),
  };
};
