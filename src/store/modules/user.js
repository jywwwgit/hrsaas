import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'

// state
const state = {
  // set initilization token, put it in cache
  token: getToken(),
  userInfo: {}
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
  },
  setUserInfo(state, result) {
    state.userInfo = result
    // state.userInfo = { ...result } // 响应式
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
// execute asynchronous
const actions = {
  async login (context, data) {
    // After the response interceptor,result === token
    const result = await login(data)
    // axios modify state must pass mutation
    context.commit('setToken', result)
  },
  // get User information action
  async getUserInfo(context) {
    const result = await getUserInfo() // get return value
    // 修改 state 里面的值，必须通过 mutation
    console.log(result)
    context.commit('setUserInfo', result)
    return result
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

