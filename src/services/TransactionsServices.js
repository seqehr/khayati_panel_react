import config from './config.json'
import httpService from './httpService'

export const TransactionsListService = (token) => {
  return httpService.post(
    `${config.baseUrl}/api/admin/transctions`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
