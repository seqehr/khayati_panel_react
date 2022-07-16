import React, { useEffect, useState } from "react";
import { Radio } from "@material-tailwind/react";
import ArticleImageDefault from "../../assets/images/UF_Infinity_khayati.gif";
import { useParams } from "react-router-dom";
import "./CKEditor.css";
import style from "./TableRow.module.scss";

// hooks
import useCourse from "../../hooks/useCourses";
import {
  AddArticleService,
  SingleArticleService,
  CatListService,
  UploadedFiles,
} from "../../services/ArticleServices";
//icons
import { AiFillPlusSquare } from "react-icons/ai";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BsDashCircleDotted } from "react-icons/bs";
// components
import config from "../../services/config.json";
import TableRow from "./ModalTableRow";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { toast } from "react-toastify";
import Settings from "../Settings/Settings";

const UpdateArticle = (props) => {
  const { id: courseId } = useParams();
  const [files, setFiles] = useState([]);
  const [uploadModal, setUploadModal] = useState(false);
  const [categorries, setCategorries] = useState([]);

  const [articleImage, setArticleImage] = useState(ArticleImageDefault);
  const [catId, setCatId] = useState(1);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [hashtag, setHashtag] = useState("");

  let ArticleImage = "";
  const handleSubmit = () => {
    ArticleImage = articleImage.replace(`${config.baseUrl}/storage/`, "");

    const data = {
      name,
      cat_id: catId,
      img: ArticleImage,
      content: description,
    };
    if (
      ArticleImage !==
      "/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif"
    ) {
      AddArticleService(data).then((res) => {
        if (res.status == 200) {
          toast.success("مقاله با موفقیت ساخته شد");
        }
      });
    } else {
      toast.warn("لطفا عکس مقاله را انتخاب کنید");
    }
  };
  useEffect(() => {
    UploadedFiles().then((res) => {
      setFiles(res.data.data);
    });

    SingleArticleService(courseId).then((res) => {
      const data = res.data.data;
      let tags = [];

      data.tag.map((item, index) => {
        tags.push(item.name);
        if (index == data.tag.length - 1) {
          setHashtags(tags);
        }
      });

      setArticleImage(data.img);
      setName(data.name);

      setDescription(data.content);
    });
    CatListService().then((res) => {
      setCategorries(res.data.data);
    });
  }, []);

  const creaeHashagHandler = () => {
    const arrHashtags = [...hashtags];

    arrHashtags.push(hashtag);
    setHashtag("");
    setHashtags(arrHashtags);
  };
  const deleteHashagHandler = (index) => {
    const arrHashtags = [...hashtags];

    const item = arrHashtags[index];
    const filteredArr = arrHashtags.filter((i) => i !== item);

    setHashtags(filteredArr);
  };

  return (
    <div className="bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl">
      <form>
        <div className="grid grid-cols-12 xl:gap-6">
          {/* A R T I C L E - E I M A G E */}
          <div
            className={` ${"col-span-12"} relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              onClick={() => setUploadModal(true)}
              src={articleImage}
              className="w-96 rounded-md"
            />
            <label
              className="p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="user_avatar"
            >
              {`انتخاب عکس مقاله`}
            </label>
          </div>

          {/* A R T I C L E  - N A M E */}
          <div className="relative col-span-9 z-0 w-full mb-6 group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="courseName"
              value={name}
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
          {/* A R T I C L E - C A T */}
          <div
            className={` ${"col-span-3"}  relative  flex  justify-center flex-col  z-0 w-full mb-6 group`}
          >
            <select
              value={catId}
              id="countries"
              name="countries"
              onChange={(e) => {
                setCatId(e.target.value);
              }}
              className="block py-2.5 pr-2 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              {categorries.map((cat) => (
                <option value={cat.id}> {cat.name}</option>
              ))}
              <option value="" disabled selected hidden>
                یک دسته بندی انتخاب کنید:
              </option>
            </select>
          </div>
          {/* A R T I C L E  - H A S H T A G */}
          <div className="relative flex col-span-6 z-0 px-1 w-full mb-6 group">
            <input
              type="text"
              name="courseName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={(e) => setHashtag(e.target.value)}
              value={hashtag}
            />
            <label
              for="courseName"
              className={`  ${"right-0"}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`برچسب ها `}
            </label>
            <p
              type="text"
              className="text-3xl absolute bottom-0 left-0  cursor-pointer text-blue-light dark:text-blue-dark"
              onClick={() => {
                creaeHashagHandler();
              }}
            >
              <AiFillPlusSquare />
            </p>
          </div>
          <div
            className={`${style.myLink} relative items-end overflow-x-scroll flex col-span-6 z-0 px-1 w-full mb-6 group`}
          >
            {hashtags.map((item, index) => (
              <p className="shadow-md mx-2 p-1 flex">
                {" "}
                <span
                  onClick={() => deleteHashagHandler(index)}
                  className="text-red-light cursor-pointer px-1"
                >
                  {" "}
                  X{" "}
                </span>{" "}
                {item}{" "}
              </p>
            ))}
          </div>

          {/* A R T I C L E  - D E S C R I B T I O N*/}
          <div className="relative col-span-12 z-0 w-full mb-6 group">
            <CKEditor
              editor={ClassicEditor}
              className={`text-right right-0`}
              data={description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
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
          {`انتشار مقاله`}
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
                <tr
                  className=""
                  key={item.id}
                  onClick={() => setArticleImage(item.url)}
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

export default UpdateArticle;
