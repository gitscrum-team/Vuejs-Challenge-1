import Vue from 'vue'
import Vuex from 'vuex'
import boards from './modules/boards'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    boards
  },
})