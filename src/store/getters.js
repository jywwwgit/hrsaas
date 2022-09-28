const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // develop submodules for others to use
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId
}
export default getters
