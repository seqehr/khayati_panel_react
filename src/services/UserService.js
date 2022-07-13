import http from "./httpService";
import config from "./config.json";
let token = window.localStorage.getItem("Khayati-token");

export const loginUser = (data) => {
  return http.post(`${config.baseUrl}/api/auth/sendsms`, data);
};

export const verifyCodeUser = (data) => {
  return http.post(`${config.baseUrl}/api/auth/sendcode`, data);
};

export const ListUsersService = () => {
  return http.get(`${config.baseUrl}/api/users/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
