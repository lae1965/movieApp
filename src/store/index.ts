import { createStore } from 'vuex';
import { IState, Movie } from '../utils/interfaces';

export const store = createStore({
  state: <IState>{
    movieList: <Movie[]>[],
    isSortedByName: false,
    isLoading: false,
    error: '',
  },
  mutations: {
    setMovieList(state: IState, payload: Movie[]) {
      state.movieList = payload;
    },
    setIsSortedByName(state: IState, payload: boolean) {
      state.isSortedByName = payload;
    },
    setIsLoading(state: IState, payload: boolean) {
      state.isLoading = payload;
    },
    setError(state: IState, payload: string) {
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
    toggleIsBoolean({
      commit,
      state,
    }: {
      commit: (name: string, payload: boolean) => void;
      state: IState;
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
    getMovieList: (state: IState) => state.movieList,
    getIsSortedByName: (state: IState) => state.isSortedByName,
    getIsLoading: (state: IState) => state.isLoading,
    getError: (state: IState) => state.error,
  },
});
