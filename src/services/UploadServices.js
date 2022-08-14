import http from './httpService'
import config from './config.json'

export const DeletFileService = (token, data) => {
  return http.post(`${config.baseUrl}/api/admin/upload/delete/${data}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
