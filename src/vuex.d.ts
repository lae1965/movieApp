declare module 'vuex' {
  interface Store<S> {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload?: P
    ): ReturnType<Mutations[K]>;
    dispatch<K extends keyof Actions>(
      key: K,
      payload?: Parameters<Actions[K]>[1]
    ): ReturnType<Actions[K]>;
    getters: {
      [K in keyof Getters]: ReturnType<Getters[K]>;
    };
    [key: string]: any;
  }

  type StoreOptions<S> = {
    state?: S | (() => S);
    mutations?: Mutations<S>;
    actions?: Actions<S>;
    getters?: Getters<S>;
  };

  function useStore<S = any>(): Store<S>;
  function createStore<S>(options: StoreOptions<S>): Store<S>;

  export { Store, StoreOptions, useStore, createStore };
}
