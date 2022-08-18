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
export const setUserJustify = (token, userId, courseId) => {
  return http.get(
    `${config.baseUrl}/api/admin/user/justify/${userId}/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
export const UserJustifyListCourses = (token, userId) => {
  return http.get(
    `${config.baseUrl}/api/admin/courses/isJustified/${userId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
