import http from './httpService'
import config from './config.json'

export const ListMembersService = (token) => {
  return http.get(`${config.baseUrl}/api/users/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const MemberListCoursesService = (token, id) => {
  return http.get(`${config.baseUrl}/api/courses/userCourses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const AddMemberService = (token, data) => {
  return http.post(`${config.baseUrl}/api/admin/adduser`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
