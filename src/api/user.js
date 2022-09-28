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

export function logout() {
}
