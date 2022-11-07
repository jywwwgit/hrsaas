import request from '@/utils/request'

export function login(data) {
  // return a Promise object
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

// get user basic information
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/**
 *获取用户的基本信息，todo 显示头像 
*/
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout() {
}
