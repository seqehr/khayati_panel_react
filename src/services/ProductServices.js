import axios from 'axios'
import config from './config.json'
import useUpload from '../hooks/useUpload'
import httpService from './httpService'
import useToken from '../hooks/useToken'
const ArticleServices = () => {
  const { token } = useToken()
  return { token }
}
export const UploadedFiles = () => {
  const { token } = ArticleServices()
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const AddProductService = (data) => {
  const { token } = ArticleServices()
  return httpService.post(`${config.baseUrl}/api/products/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ListProductsService = () => {
  const { token } = ArticleServices()
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
  const { token } = ArticleServices()
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
  const { token } = ArticleServices()
  return httpService.get(`${config.baseUrl}/api/products/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const CatListService = () => {
  const { token } = ArticleServices()
  return httpService.get(`${config.baseUrl}/api/posts/cats/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
