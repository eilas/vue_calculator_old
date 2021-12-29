import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  actions: {
    updateFormula (context, value) {
      context.commit('updateFormula', value)
    }
  },
  mutations: {
    updateFormula (state, value) {
      state.formula += value
    },
    backspaceFormula (state) {
      state.formula = state.formula.slice(0, state.formula.length - 1)
    },
    clearFormula (state) {
      state.formula = ''
    }
  },
  state: {
    formula: ''
  }
})
