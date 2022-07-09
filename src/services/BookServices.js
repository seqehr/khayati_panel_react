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
export const AddBookService = (data) => {
  return httpService.post(`${config.baseUrl}/api/books/create`, data, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });
};
export const ListBooksService = () => {
  return httpService.get(
    `${config.baseUrl}/api/books/archive`,

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
