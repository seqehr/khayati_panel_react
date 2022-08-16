import config from './config.json'
import httpService from './httpService'

export const UploadedFiles = (token) => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const AddAMusicService = (token, data) => {
  return httpService.post(`${config.baseUrl}/api/musics/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ListMusicsService = (token) => {
  return httpService.post(
    `${config.baseUrl}/api/musics/archive`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const DeleteMusicService = (token, id) => {
  return httpService.get(
    `${config.baseUrl}/api/musics/delete/${id}`,

    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const SingleMusicService = (token, id) => {
  return httpService.get(`${config.baseUrl}/api/musics/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const EditMusicService = (token, data, id) => {
  return httpService.post(`${config.baseUrl}/api/musics/edit/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
