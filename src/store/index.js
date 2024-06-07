import { createStore } from 'vuex';

const store = createStore({
  state: {
    accessToken: localStorage.getItem('accessToken') || '',
    rememberMe: JSON.parse(localStorage.getItem('rememberMe')) || false,
    username: localStorage.getItem('username') || ''
  },
  mutations: {
    setAccessToken(state, token) {
      console.log('Setting access token:', token);
      state.accessToken = token;
      localStorage.setItem('accessToken', token);
    },
    clearAccessToken(state) {
      console.log('Clearing access token');
      state.accessToken = '';
      localStorage.removeItem('accessToken');
    },
    setRememberMe(state, value) {
      console.log('Setting remember me:', value);
      state.rememberMe = value;
      localStorage.setItem('rememberMe', JSON.stringify(value));
    },
    setUsername(state, username) {
      console.log('Setting username:', username);
      state.username = username;
      localStorage.setItem('username', username);
    },
    clearUsername(state) {
      console.log('Clearing username');
      state.username = '';
      localStorage.removeItem('username');
    }
  },
  actions: {
    login({ commit }, { token, rememberMe, username }) {
      console.log('Logging in with token:', token, 'Remember me:', rememberMe);
      commit('setAccessToken', token);
      commit('setRememberMe', rememberMe);
      if (rememberMe) {
        commit('setUsername', username);
      } else {
        commit('clearUsername');
      }
    },
    logout({ commit, state }) {
      console.log('Logging out');
      commit('clearAccessToken');
      if (!state.rememberMe) {
        commit('clearUsername');
      }
    }
  },
  getters: {
    isAuthenticated: state => !!state.accessToken,
    accessToken: state => state.accessToken,
    rememberMe: state => state.rememberMe,
    username: state => state.username
  }
});

export default store;