import axios from "axios";
import config from "./config.json";
import useUpload from "../hooks/useUpload";
import httpService from "./httpService";
let token = window.localStorage.getItem("Khayati-token");

export const UploadedFiles = () => {
  return httpService.get(`${config.baseUrl}/api/upload/files`, {
    headers: {
      Authorization: `Bearer${token}`,
    },
  });
};
export const AddBookService = (data) => {
  return httpService.post(`${config.baseUrl}/api/books/create`, data, {
    headers: {
      Authorization: `Bearer${token}`,
    },
  });
};
export const ListBooksService = () => {
  return httpService.get(
    `${config.baseUrl}/api/books/archive`,

    {
      headers: {
        Authorization: `Bearer${token}`,
      },
    }
  );
};
export const DeleteBookService = (id) => {
  return httpService.post(
    `${config.baseUrl}/api/books/delete/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${token}`,
      },
    }
  );
};

export const SingleBookService = (id) => {
  return httpService.get(`${config.baseUrl}/api/books/single/${id}`, {
    headers: {
      Authorization: `Bearer${token}`,
    },
  });
};
