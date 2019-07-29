import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      accessToken: undefined,
      idToken: undefined,
      name: undefined,
      email: undefined,
      id: undefined
    }
  },
  getters: {
    getId: state => state.auth.id
  },
  mutations: {
    setUserAuth: ({ auth }, { accessToken, idToken, name, email, id }) => {
      auth.accessToken = accessToken
      auth.idToken = idToken
      auth.name = name
      auth.email = email
      auth.id = id
    },
    // SOCKET_connect(data, payload) {
    //   console.log('SOCKET_MUTATION_myEvent', data, payload)
    // },
    SOCKET_myEvent(data, payload) {
      console.log('SOCKET_MUTATION_myEvent', data, payload)
    }
  },
  actions: {
    // SOCKET_connect(data, payload) {
    //   console.log('SOCKET_action_myEvent', data, payload)
    // },
    SOCKET_myEvent(data, payload) {
      console.log('SOCKET_action_myEvent', data, payload)
    }
  }
})
