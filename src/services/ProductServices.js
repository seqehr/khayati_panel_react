import config from './config.json'
import httpService from './httpService'

export const UploadedFiles = (token) => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const AddProductService = (token, data) => {
  return httpService.post(`${config.baseUrl}/api/products/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ListProductsService = (token) => {
  return httpService.get(
    `${config.baseUrl}/api/products/archive`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const DeleteProductService = (token, id) => {
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
export const SingleProductService = (token, id) => {
  return httpService.get(`${config.baseUrl}/api/products/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const CatListService = (token) => {
  return httpService.post(
    `${config.baseUrl}/api/products/cats/list`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const CreateProductCatService = (token, data) => {
  return httpService.post(`${config.baseUrl}/api/products/cats/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const EditProductCatService = (token, data, id) => {
  return httpService.post(
    `${config.baseUrl}/api/products/cats/edit/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const DeleteProductCatService = (token, data) => {
  return httpService.get(`${config.baseUrl}/api/products/cats/delete/${data}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const EditProductService = (token, data, id) => {
  return httpService.post(`${config.baseUrl}/api/products/edit/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
