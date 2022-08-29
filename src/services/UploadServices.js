import http from './httpService'
import config from './config.json'

export const DeletFileService = (token, data) => {
  return http.post(`${config.baseUrl}/api/admin/upload/delete/${data}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const Directories = (token) => {
  return http.post(
    `${config.baseUrl}/api/upload/directories`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

export const CreateDirectory = (token, data) => {
  return http.post(`${config.baseUrl}/api/upload/createDirectory`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const SerchFiles = (token, data) => {
  console.log(data)
  return http.get(`${config.baseUrl}/api/upload/search/${data.name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
