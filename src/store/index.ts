import { createStore } from 'vuex';
import { State, Movie } from '../utils/interfaces';

export const store = createStore<State>({
  state: <State>{
    movieList: <Movie[]>[],
    singleMovie: <Movie>{},
    isSortedByName: false,
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
    setIsSortedByName(state: State, payload: boolean) {
      state.isSortedByName = payload;
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
    toggleIsSortedByName({
      commit,
      state,
    }: {
      commit: (name: string, payload: boolean) => void;
      state: State;
    }) {
      commit('setIsSortedByName', !state.isSortedByName);
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
    getIsSortedByName: (state: State) => state.isSortedByName,
    getIsLoading: (state: State) => state.isLoading,
    getError: (state: State) => state.error,
  },
});
