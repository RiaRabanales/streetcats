import { createStore } from 'vuex'
import { ref } from 'vue';

const state = {
  logged: ref('false'),
  user: ref('null'),
  portraits: [
    { url: require("@/assets/img/cat01.png"), description: "A white baby!" },
    { url: require("@/assets/img/cat02.png"), description: "A rescued lady." },
    { url: require("@/assets/img/cat03.png"), description: "A star!" },
    { url: require("@/assets/img/cat04.png"), description: "Xafardereta" },
    { url: require("@/assets/img/cat05.png"), description: "Cat!" },
    { url: require("@/assets/img/cat06.png"), description: "Kitty!" },
    { url: require("@/assets/img/cat07.png"), description: "Kitty!" },
    { url: require("@/assets/img/cat08.png"), description: "Kitty!" },
    { url: require("@/assets/img/cat09.png"), description: "Kitty!" },
  ],
  admins: ['patata@frita.es']
}

const mutations = {

  setUser(state, changedUser) {
    state.user = changedUser.data;
  },

  setLogged(state) {
    state.logged = true;
  },

  unsetLogged(state) {
    state.logged = false;
  }
}

const actions = {

  handleUser({ commit }, user) {
    if (user) {
      commit({
        type: 'setUser',
        data: {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        }
      });
      commit('setLogged');
    } else {
      commit({
        type: 'setUser',
        data: null
      });
      commit('unsetLogged');
    }
  }

}

const getters = {
  //comprueba si state.user es nulo y devuelve true/false
  isAuthenticated: state => !!state.user,

  //devuelve un array de retratos de gato aleatorio
  getPortraits: state => {
    let builtPortraits = [];
    do {
      let randomPortrait = state.portraits[Math.floor(Math.random() * state.portraits.length)];
      if (!builtPortraits.includes(randomPortrait)) {
        builtPortraits.push(randomPortrait);
      }
    } while (builtPortraits.length < 3);
    return builtPortraits;
  }
}

export const store = createStore({
  state,
  mutations,
  actions,
  getters
});
