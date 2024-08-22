import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';
import { Movie } from '../utils/interfaces';

export const store = createStore({
  state: {
    movieList: <Movie[]>[],
    isSortedByName: false,
    isLoading: false,
    error: null,
  },
  mutations: {
    setMovieList(state, payload) {
      console.log(payload);

      state.movieList = cloneDeep(payload);
    },
    setIsSortedByName(state, payload) {
      state.isSortedByName = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    updateMovieList({ commit }, payload) {
      commit('setMovieList', payload);
    },
    toggleIsBoolean({ commit, state }) {
      commit('setIsSortedByName', !state.isSortedByName);
    },
    updateIsLoading({ commit }, payload) {
      commit('setIsLoading', payload);
    },
    updateError({ commit }, payload) {
      commit('setError', payload);
    },
  },
  getters: {
    getMovieList: (state) => state.movieList,
    getIsSortedByName: (state) => state.isSortedByName,
    getIsLoading: (state) => state.isLoading,
    getError: (state) => state.error,
  },
});
