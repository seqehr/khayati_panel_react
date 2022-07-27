import axios from 'axios'
import config from './config.json'
import httpService from './httpService'
let token = window.localStorage.getItem('Khayati-token')

export const UploadedFiles = () => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const AddCourseService = (data) => {
  return httpService.post(`${config.baseUrl}/api/courses/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ListCoursesService = () => {
  return httpService.get(`${config.baseUrl}/api/courses/archive`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const DeleteCoursesService = (id) => {
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

export const SingleCourseService = (id) => {
  return httpService.get(`${config.baseUrl}/api/courses/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
