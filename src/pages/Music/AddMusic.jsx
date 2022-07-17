import React, { useEffect, useState } from "react";
import { BsDashCircleDotted } from "react-icons/bs";
import { AddAMusicService, UploadedFiles } from "../../services/MusicsServices";

// components
import TableRow from "./ModalTableRow";
import config from "../../services/config.json";
// css
import style from "./TableRow.module.scss";
import { toast } from "react-toastify";

const AddMusic = (props) => {
  const [files, setFiles] = useState([]);
  const [uploadModal, setUploadModal] = useState(false);

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  let Url = "";
  const handleSubmit = () => {
    Url = url.replace(`${config.baseUrl}/storage/`, "");

    const data = {
      name: name,
      url: url,
    };
    AddAMusicService(data).then((res) => {
      if (res.status == 200) {
        toast.success("موزیک با موفقیت ثبت شد");
      }
    });
  };

  useEffect(() => {
    UploadedFiles().then((res) => {
      setFiles(res.data.data);
    });
  }, []);

  return (
    <div className="bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl">
      <form>
        <div className="grid grid-cols-12 xl:gap-6">
          {/* M U S I C  - N A M E */}
          <div className="relative col-span-3 z-0 w-full mb-6 group">
            <input
              type="text"
              name="courseName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="courseName"
              className={`  ${"right-0"}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`عنوان `}
            </label>
          </div>
          {/* M U S I C  - U R L */}
          <div className="relative col-span-9 z-0 w-full mb-6 group">
            <input
              type="text"
              name="excrept"
              id="excrept"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              value={url}
              onClick={() => setUploadModal(true)}
            />
            <label
              for="excrept"
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`لینک موزیک`}
            </label>
          </div>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          {`انتشار `}
        </button>
      </form>

      {/* Upload Modal*/}
      {uploadModal && (
        <div className="w-screen p-24  h-screen bg-[#212121a1] fixed top-0 left-0 z-[999999] ">
          <div
            onClick={() => setUploadModal(false)}
            className="mx-auto flex flex-row text-xl text-red-light cursor-pointer bg-white w-max rounded p-3 mb-2"
          >
            <span className="text-sm pl-3"> بستن صفحه </span>

            <BsDashCircleDotted />
          </div>
          <table className="max-w-fit mx-auto  overflow-hidden rounded-2xl">
            <thead
              className={`${"text-right"} bg-white text-black dark:text-white `}
            >
              <th className="px-2 py-2 pr-4">{`نام فایل`}</th>

              <th></th>
            </thead>
            <div
              className={`bg-background2-light max-h-96  overflow-x-scroll ml-[-3px] dark:bg-background2-dark overflow-y-scroll ${style.myLink}`}
            >
              {files.map((item) => (
                <tr className="" key={item.id} onClick={() => setUrl(item.url)}>
                  <TableRow name={item.name} link={item.url} />
                </tr>
              ))}
            </div>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddMusic;
