import http from "./httpService";
import config from "./config.json";

export const exchangeInfo = () => {
  return http.get(`${config.binance}/api/v1/exchangeInfo`,);
};
