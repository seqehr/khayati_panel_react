import http from './httpService'
import config from './config.json'

export const DataDashboardService = (token) => {
  return http.get(`${config.baseUrl}/api/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const UsageCpuDashboardService = (token) => {
  return http.get(`${config.baseUrl}/api/usage`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
