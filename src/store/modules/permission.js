import { constantRoutes } from '@/router'
const state = {
  routes: [],
  status: 0
}
const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  },

  SET_STATUS:(state, status)=>{
    state.status = status
  }
}
const actions = {
  generateRoutes({ commit }) {
    commit('SET_ROUTES', constantRoutes)
    commit('SET_STATUS', 1)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
