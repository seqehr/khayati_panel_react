import http from './httpService'
import config from './config.json'

export const OrdersList = (token) => {
  return http.get(`${config.baseUrl}/api/admin/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
