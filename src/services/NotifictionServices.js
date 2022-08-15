import config from './config.json'
import http from './httpService'

export const sendNotifictionService = (token, data) => {
  return http.post(`${config.baseUrl}/api/notification/send`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
