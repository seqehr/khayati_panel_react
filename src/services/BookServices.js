import config from './config.json'
import httpService from './httpService'

export const UploadedFiles = (token) => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer${token}`,
    },
  })
}
export const AddBookService = (token, data) => {
  return httpService.post(`${config.baseUrl}/api/books/create`, data, {
    headers: {
      Authorization: `Bearer${token}`,
    },
  })
}
export const ListBooksService = (token) => {
  return httpService.get(
    `${config.baseUrl}/api/books/archive`,

    {
      headers: {
        Authorization: `Bearer${token}`,
      },
    }
  )
}
export const DeleteBookService = (token, id) => {
  return httpService.post(
    `${config.baseUrl}/api/books/delete/${id}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer${token}`,
      },
    }
  )
}

export const SingleBookService = (token, id) => {
  return httpService.get(`${config.baseUrl}/api/books/single/${id}`, {
    headers: {
      Authorization: `Bearer${token}`,
    },
  })
}
