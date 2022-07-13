import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Resumable from "resumablejs";
import $ from "jquery";
import useUpload from "../../hooks/useUpload";
//icons
import { FiUploadCloud } from "react-icons/fi";

import { useDropzone } from "react-dropzone";
import { Line } from "rc-progress";
import Files from "./Files";
// css
import "./Upload.css";
import { UploadedFiles } from "../../services/CourseServices";
const Uploads = () => {
  const { progress, setProgress, setFiles } = useUpload();
  useEffect(() => {
    const browseFile = document.querySelector("#browseFile");

    let resumable = new Resumable({
      target: "http://185.7.212.87:500/api/upload/new",
      query: { _token: "{{ csrf_token() }}" }, // CSRF token
      fileType: ["mp4", "jpg", "png", "mp3"],
      headers: {
        Accept: "application/json",
      },
      testChunks: false,
      throttleProgressCallbacks: 1,
    });

    resumable.assignDrop(browseFile);
    resumable.assignBrowse(browseFile);
    resumable.on("fileAdded", function (file) {
      // trigger when file picked

      resumable.upload(); // to actually start uploading.
    });

    resumable.on("fileProgress", function (file) {
      // trigger when file progress update
      updateProgress(Math.floor(file.progress() * 100));
    });

    resumable.on("fileSuccess", function (file, response) {
      // trigger when file upload complete
      response = JSON.parse(response);
    });

    resumable.on("fileError", function (file, response) {
      // trigger when there is any error
      alert("مشکلی به وجود امده");
    });

    function updateProgress(value) {
      setProgress(value);
    }
  }, []);
  console.log(progress);
  if (progress == "100") {
    setTimeout(() => {
      UploadedFiles().then((res) => {
        setFiles(res.data.data);
        setProgress("");
      });
    }, 2000);
  }
  return (
    <>
      <div className="container ">
        <div id="upload-container" className=" w-full flex justify-center">
          <button
            id="browseFile"
            className="text-gray-light text-xl flex border-2 text-center justify-center w-full dark:border-gray-light border-gray-dark dark:text-white  border-dashed p-10 cursor-pointer rounded-lg"
          >
            <span className="text-3xl mx-4 ">
              <FiUploadCloud />
            </span>
            فایلتان را در این قسمت رها کنید
          </button>
        </div>
        {progress !== "" && (
          <div className=" flex justify-center">
            <div className="w-96 sm:w-[550px] text-center mt-10">
              <Line
                percent={progress}
                strokeWidth={3}
                strokeColor={[
                  "#87d068",
                  {
                    "100%": "#87d068",
                    "0%": "#108ee9",
                  },
                ]}
              />
              <p className="">درحال اپلود ({progress}%) </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10">
        <Files />
      </div>
    </>
  );
};

export default Uploads;
