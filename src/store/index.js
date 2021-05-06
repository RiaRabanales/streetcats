import { createStore } from 'vuex'
import { ref } from 'vue';

const state = {
  logged: ref('false'),
  user: ref('null')
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
      console.log(user)
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

const getters = {}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
