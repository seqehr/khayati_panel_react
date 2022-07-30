import axios from 'axios'
import config from './config.json'
import useUpload from '../hooks/useUpload'
import http from './httpService'

export const Sliders = (token) => {
  return http.post(`${config.baseUrl}/api/theme/TopRightSlider`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
