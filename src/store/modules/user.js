import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

// state
const state = {
  // set initilization token, put it in cache
  token: getToken()
}
// modify the state
const mutations = {
  // set token
  setToken (state, token) {
    state.token = token // modify data of token
    setToken(token) // vuex and cache data's synchronization
  },
  // remove cache
  removeToken (state) {
    state.token = null // delete token of vuex
    removeToken() // clear vuex and then clear cache vuex and cache data's synchronization
  }
}
// execute asynchronous
const actions = {
  async login (context, data) {
    // After the response interceptor,result === token
    console.log(result)
    // axios modify state must pass mutation
    context.commit('setToken', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

