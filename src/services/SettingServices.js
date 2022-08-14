import axios from 'axios'
import config from './config.json'
import http from './httpService'

export const Sliders = (token) => {
  return http.post(`${config.baseUrl}/api/theme/TopRightSlider`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
export const RemoveImage = (token, data) => {
  return http.post(`${config.baseUrl}/api/admin/slider/delete/${data}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}

export const UploadedFiles = (token) => {
  return http.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const CreateImage = (token, data) => {
  return http.post(`${config.baseUrl}/api/admin/slider/create`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ChangesSettingService = (token, data) => {
  return http.post(`${config.baseUrl}/api/admin/settings/change`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
export const settingsDataService = (token) => {
  return http.get(`${config.baseUrl}/api/admin/settings`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
