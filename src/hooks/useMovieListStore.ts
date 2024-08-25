import { useStore } from 'vuex';
import { fetchMovieList, fetchSingleMovie } from '../api';
import { prepareMovieList, prepareMovie } from '../utils/prepereData';
import { computed, ComputedRef } from 'vue';
import { Movie, SortStatus } from '../utils/interfaces';
import { AxiosError } from 'axios';

export const useMovieListStore = () => {
  const store = useStore();

  const loadMovie = async (id?: number) => {
    try {
      store.dispatch('updateIsLoading', true);
      store.dispatch('updateError', '');
      if (id === undefined) {
        store.dispatch(
          'updateMovieList',
          prepareMovieList(await fetchMovieList())
        );
      } else {
        store.dispatch(
          'updateSingleMovie',
          prepareMovie(await fetchSingleMovie(id))
        );
      }
    } catch (e) {
      store.dispatch('updateError', (e as AxiosError).message);
    } finally {
      store.dispatch('updateIsLoading', false);
    }
  };

  const setSortStatus = (status: number) => {
    store.dispatch('updateSortStatus', status as SortStatus);
  };

  return {
    loadMovie,
    movieList: <ComputedRef<Movie[]>>computed(() => store.getters.getMovieList),
    singleMovie: <ComputedRef<Movie>>(
      computed(() => store.getters.getSingleMovie)
    ),
    setSortStatus,
    sortStatus: <ComputedRef<SortStatus>>(
      computed(() => store.getters.getSortStatus)
    ),
    isLoading: <ComputedRef<boolean>>computed(() => store.getters.getIsLoading),
    isError: <ComputedRef<boolean>>computed(() => !!store.getters.getError),
  };
};
