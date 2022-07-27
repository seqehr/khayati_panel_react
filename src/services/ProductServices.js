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
export const AddProductService = (data) => {
  return httpService.post(`${config.baseUrl}/api/products/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ListProductsService = () => {
  return httpService.get(
    `${config.baseUrl}/api/products/archive`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const DeleteProductService = (id) => {
  return httpService.get(
    `${config.baseUrl}/api/products/delete/${id}`,

    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const SingleProductService = (id) => {
  return httpService.get(`${config.baseUrl}/api/products/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const CatListService = () => {
  return httpService.get(`${config.baseUrl}/api/posts/cats/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
