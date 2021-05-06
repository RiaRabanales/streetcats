import { createStore } from 'vuex'

const state = {
  logged: false,  //TODO: reconvertirlo a if(!user)
  user: null,
}

const mutations = {
  setUser(state, payload) {
    state.logged = true;
    state.user = payload; //TODO este payload es el user, ver exactamente q me devuelve
    //TODO
  },

  unsetUser(state) {
    state.logged = false;
    state.user = null;
  }
}

const actions = {}

const getters = {}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
