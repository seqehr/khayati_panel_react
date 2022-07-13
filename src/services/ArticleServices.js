import axios from "axios";
import config from "./config.json";
import useUpload from "../hooks/useUpload";
import httpService from "./httpService";
let token = window.localStorage.getItem("Khayati-token");

export const UploadedFiles = () => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const AddArticleService = (data) => {
  return httpService.post(`${config.baseUrl}/api/posts/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const ListArticlesService = () => {
  return httpService.post(
    `${config.baseUrl}/api/posts`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const DeleteArticleService = (id) => {
  return httpService.post(
    `${config.baseUrl}/api/posts/delete/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const SingleArticleService = (id) => {
  return httpService.get(`${config.baseUrl}/api/posts/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
