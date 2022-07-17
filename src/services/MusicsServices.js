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
export const AddAMusicService = (data) => {
  return httpService.post(`${config.baseUrl}/api/musics/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const ListMusicsService = () => {
  return httpService.post(
    `${config.baseUrl}/api/musics/archive`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const DeleteMusicService = (id) => {
  return httpService.get(
    `${config.baseUrl}/api/musics/delete/${id}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const SingleMusicService = (id) => {
  return httpService.get(`${config.baseUrl}/api/musics/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
