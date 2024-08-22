import { useStore } from 'vuex';
import { fetchMovieList } from '../api';
import { prepareMovieList } from '../utils/prepereData';
import { ref } from 'vue';
import { Movie } from '../utils/interfaces';

export const useMovieListStore = () => {
  const store = useStore();
  const parsedMovieList = ref<Movie[]>([]);

  const loadMovieList = async () => {
    const movieListApi = await fetchMovieList();
    parsedMovieList.value = prepareMovieList(movieListApi);
    store.dispatch('updateMovieList', parsedMovieList.value);
  };

  return {
    getMovieList: () => parsedMovieList.value,
    loadMovieList,
  };
};
