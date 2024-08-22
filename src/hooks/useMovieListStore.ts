import { useStore } from 'vuex';
import { fetchMovieList } from '../api';
import { prepareMovieList } from '../utils/prepereData';
import { computed, ref } from 'vue';
import { Movie } from '../utils/interfaces';

export const useMovieListStore = () => {
  const store = useStore();
  // const parsedMovieList = ref<Movie[]>([]);

  const loadMovieList = async () => {
    const movieListApi = await fetchMovieList();
    const parsedMovieList = await prepareMovieList(movieListApi);
    store.dispatch('updateMovieList', parsedMovieList);
  };

  return {
    movieList: computed(() => store.getters.getMovieList),
    loadMovieList,
  };
};
