import axios from 'axios'
import config from './config.json'
import httpService from './httpService'

export const UploadedFiles = (token) => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const AddCourseService = (token, data) => {
  return httpService.post(`${config.baseUrl}/api/courses/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ListCoursesService = (token) => {
  return httpService.get(`${config.baseUrl}/api/courses/archive`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const DeleteCoursesService = (token, id) => {
  return httpService.post(
    `${config.baseUrl}/api/courses/delete/${id}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

export const SingleCourseService = (token, id) => {
  return httpService.get(`${config.baseUrl}/api/courses/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
