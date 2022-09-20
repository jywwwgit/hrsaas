import request from '@/utils/request'

export function login(data) {
  // return a Promise object
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
}

export function logout() {
}
