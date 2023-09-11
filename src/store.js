// store.js
const { createStore } = require('vuex')

const store = createStore({
  state: {
    // Define tu estado inicial aquí
  },
  mutations: {
    // Mutación para actualizar el estado del juego
    updateGameDetails (state, payload) {
      state.gameDetails = payload
    }
  },
  actions: {
    // Define tus acciones aquí
  },
  getters: {
    // Define tus getters aquí
  }
})

module.exports = store
