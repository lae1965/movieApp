import { createStore } from 'vuex';
import { State, Movie, SortStatus } from '../utils/interfaces';

export const store = createStore<State>({
  state: <State>{
    movieList: <Movie[]>[],
    singleMovie: <Movie>{},
    sortStatus: SortStatus.NO_SORTED,
    isLoading: false,
    error: '',
  },
  mutations: {
    setMovieList(state: State, payload: Movie[]) {
      state.movieList = payload;
    },
    setSingleMovie(state: State, payload: Movie) {
      state.singleMovie = payload;
    },
    setSortStatus(state: State, payload: SortStatus) {
      state.sortStatus = payload;
    },
    setIsLoading(state: State, payload: boolean) {
      state.isLoading = payload;
    },
    setError(state: State, payload: string) {
      state.error = payload;
    },
  },
  actions: {
    updateMovieList(
      { commit }: { commit: (name: string, payload: Movie[]) => void },
      payload: Movie[]
    ) {
      commit('setMovieList', payload);
    },
    updateSingleMovie(
      { commit }: { commit: (name: string, payload: Movie) => void },
      payload: Movie
    ) {
      commit('setSingleMovie', payload);
    },
    updateSortStatus(
      { commit }: { commit: (name: string, payload: SortStatus) => void },
      payload: SortStatus
    ) {
      commit('setSortStatus', payload);
    },
    updateIsLoading(
      { commit }: { commit: (name: string, payload: boolean) => void },
      payload: boolean
    ) {
      commit('setIsLoading', payload);
    },
    updateError(
      { commit }: { commit: (name: string, payload: string) => void },
      payload: string
    ) {
      commit('setError', payload);
    },
  },
  getters: {
    getMovieList: (state: State) => state.movieList,
    getSingleMovie: (state: State) => state.singleMovie,
    getSortStatus: (state: State) => state.sortStatus,
    getIsLoading: (state: State) => state.isLoading,
    getError: (state: State) => state.error,
  },
});
