import React, { useEffect, useState } from "react";
import { AddBookService, UploadedFiles } from "../../services/BookServices";
import ImageDefault from "../../assets/images/UF_Infinity_khayati.gif";
// css
import style from "./TableRow.module.scss";
//icons
import { BsPlusCircleDotted } from "react-icons/bs";
import { BsDashCircleDotted } from "react-icons/bs";
// components
import TableRow from "./ModalTableRow";
import { toast } from "react-toastify";

const AddBook = (props) => {
  const [files, setFiles] = useState([]);
  const [uploadModal, setUploadModal] = useState(0);

  const [bookImage, setBookImage] = useState(ImageDefault);
  const [title, setTitle] = useState("");

  const [url, setUrl] = useState([]);

  let BookImage = "";
  let Url = "";
  const handleSubmit = () => {
    BookImage = bookImage.replace("http://94.183.118.68:500/storage/", "");

    Url = url.replace("http://94.183.118.68:500/storage/", "");

    const data = {
      name: title,
      img: BookImage,
      link: Url,
    };
    if (
      BookImage !== "/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif"
    ) {
      AddBookService(data).then((res) => {
        if (res.status == 200) {
          toast.success("کتاب با موفقیت ثبت شد");
        }
      });
    } else {
      toast.warn("لطفا عکس کتاب را انتخاب کنید");
    }
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
          {/* C O U R S E - I M A G E */}
          <div
            className={` ${"col-span-12"} relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              src={bookImage}
              className="w-96 rounded-md"
              onClick={() => {
                setUploadModal(2);
              }}
            />
            <label
              className="p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="user_avatar"
            >
              {`انتخاب عکس کتاب`}
            </label>
          </div>
          {/* B O O K  - N A M E */}
          <div className="relative col-span-3 pl-2 z-0 w-full mb-6 group">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="courseName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="courseName"
              className={`  ${"right-0"}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`عنوان `}
            </label>
          </div>
          {/* B O O K  - U R L */}
          <div className="relative col-span-9 z-0 w-full mb-6 group">
            <input
              type="text"
              onClick={() => setUploadModal(1)}
              value={url}
              name="excrept"
              id="excrept"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="excrept"
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`لینک کتاب`}
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
      {uploadModal !== 0 && (
        <div className="w-screen p-24  h-screen bg-[#212121a1] fixed top-0 left-0 z-[999999] ">
          <div
            onClick={() => setUploadModal(0)}
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
                <tr
                  className=""
                  key={item.id}
                  onClick={() => {
                    if (uploadModal == 1) {
                      setUrl(item.url);
                    }
                    if (uploadModal == 2) {
                      setBookImage(item.url);
                    }
                  }}
                >
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

export default AddBook;
