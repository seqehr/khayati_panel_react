import http from "./httpService";
import config from "./config.json";

export const loginUser = (data) => {
  return http.post(`${config.baseUrl}/api/account/Login`, data);
};

export const verifyCodeUser = (data) => {
  return http.post(`${config.baseUrl}/api/account/Login/Two-Factor`, data);
};
