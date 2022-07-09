import axios from "axios";
import config from "./config.json";
import useUpload from "../hooks/useUpload";
import httpService from "./httpService";
export const UploadedFiles = () => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const AddArticleService = (data) => {
  return httpService.post(`${config.baseUrl}/api/posts/create`, data, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const ListArticlesService = () => {
  return httpService.post(
    `${config.baseUrl}/api/posts`,
    {},
    {
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    }
  );
};
export const DeleteCoursesService = (id) => {
  return httpService.post(
    `${config.baseUrl}/api/courses/delete/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.token}`,
      },
    }
  );
};
