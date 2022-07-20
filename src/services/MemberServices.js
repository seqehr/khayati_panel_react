import http from './httpService'
import config from './config.json'
let token = window.localStorage.getItem('Khayati-token')

export const ListMembersService = () => {
  return http.get(`${config.baseUrl}/api/users/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const MemberListCoursesService = (id) => {
  return http.get(`${config.baseUrl}/api/courses/userCourses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
