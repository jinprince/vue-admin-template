const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,// 在根级的getters上 开发子模块的属性给别人看 给别人用
  avatar: state => state.user.userInfo.avatar,
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId,
  staffPhoto: state => state.user.userInfo.staffPhoto, // 建立用户头像的映射
  companyId:state=>state.user.userInfo.companyId
}
export default getters
