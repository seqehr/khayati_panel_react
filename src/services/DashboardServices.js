import http from './httpService'
import config from './config.json'
let token = window.localStorage.getItem('Khayati-token')

export const DataDashboardService = () => {
  return http.get(`${config.baseUrl}/api/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
