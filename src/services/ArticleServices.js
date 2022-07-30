import config from './config.json'
import httpService from './httpService'

export const UploadedFiles = (token) => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const AddArticleService = (token, data) => {
  return httpService.post(`${config.baseUrl}/api/posts/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const ListArticlesService = (token) => {
  return httpService.post(
    `${config.baseUrl}/api/posts`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const DeleteArticleService = (token, id) => {
  return httpService.post(
    `${config.baseUrl}/api/posts/delete/${id}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const SingleArticleService = (token, id) => {
  return httpService.get(`${config.baseUrl}/api/posts/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const CatListService = (token) => {
  return httpService.get(`${config.baseUrl}/api/posts/cats/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const ListTagsService = (token) => {
  return httpService.get(`${config.baseUrl}/api/tags/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const DeleteTagService = (token, id) => {
  return httpService.get(
    `${config.baseUrl}/api/tags/delete/${id}`,

    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
