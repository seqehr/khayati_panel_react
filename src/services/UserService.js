import http from './httpService'
import config from './config.json'
let token = window.localStorage.getItem('Khayati-token')

export const loginUser = (data) => {
  return http.post(`${config.baseUrl}/api/admin/sendsms`, data)
}

export const verifyCodeUser = (data) => {
  return http.post(`${config.baseUrl}/api/admin/sendcode`, data)
}

export const ListUsersService = () => {
  return http.get(`${config.baseUrl}/api/users/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ChekLoginUser = () => {
  return http.get(`${config.baseUrl}/api/admin/checkauth`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
