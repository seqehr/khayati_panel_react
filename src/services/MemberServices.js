import http from "./httpService";
import config from "./config.json";
let token = window.localStorage.getItem("Khayati-token");

export const ListMembersService = () => {
  return http.get(`${config.baseUrl}/api/users/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
