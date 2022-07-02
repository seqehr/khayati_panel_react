import React, { useCallback, useState } from "react";
import axios from "axios";
//icons
import { FiUploadCloud } from "react-icons/fi";

import { useDropzone } from "react-dropzone";
import { Line } from "rc-progress";

const Uploads = () => {
  const [progress, setProgress] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    let dt = new FormData();
    dt.append("file", acceptedFiles[0]);

    axios({
      method: "post",
      url: "http://192.168.1.107:500/api/upload/new",
      data: dt,
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const perecent = Math.floor((loaded * 100) / total);
        setProgress(perecent);
      },
    }).then((res) => {
      setInterval(console.log(res), 1000);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div className="w-full flex justify-center" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="border-2 border-dashed p-10 cursor-pointer rounded-lg">
            فایلتان را اینجا رها کنید ...
          </p>
        ) : (
          <div className="border-2 border-dashed p-10 flex cursor-pointer rounded-lg">
            <div className="text-2xl">
              {" "}
              <FiUploadCloud />
            </div>

            <p className="pr-5">
              فایل خود را به این قسمت بکشید و رها کنید و یا ( کلیک ) کنید
            </p>
          </div>
        )}
      </div>
      {progress && (
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
    </>
  );
};

export default Uploads;
