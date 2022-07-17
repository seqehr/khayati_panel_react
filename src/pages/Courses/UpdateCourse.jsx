import React, { useEffect, useState } from "react";
import { Radio } from "@material-tailwind/react";
import CourseImageDefault from "../../assets/images/UF_Infinity_khayati.gif";
import TableRow from "./ModalTableRow";
import "./CKEditor.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

// css
import style from "./TableRow.module.scss";
// hooks
import useCourse from "../../hooks/useCourses";
//icons
import { BsPlusCircleDotted } from "react-icons/bs";
import { BsDashCircleDotted } from "react-icons/bs";
// components
import Lessons from "./Lessons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import config from "../../services/config.json";
import {
  AddCourseService,
  UploadedFiles,
  SingleCourseService,
} from "../../services/CourseServices";

const UpdateCourse = (props) => {
  const { id: courseId } = useParams();

  const [files, setFiles] = useState([]);
  const [uploadModal, setUploadModal] = useState(0);

  // Form States
  const { getLesson, setLessons } = useCourse();
  const [courseImage, setCourseImage] = useState(CourseImageDefault);
  const [coursePoster, setCoursePoster] = useState(CourseImageDefault);
  const [color, setColor] = useState("");
  const [isPin, setIsPin] = useState(false);
  const [isFree, setIsFree] = useState("price");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [name, setName] = useState("");

  const colors = [
    {
      color: "linear-gradient(180deg, #F90000 39.06%, #000000 100%)",
      name: "قرمز",
    },
    {
      color: "linear-gradient(180deg, #3D39FF 39.06%, #000000 100%)",
      name: "آبی",
    },
    {
      color: "linear-gradient(180deg, #A900F9 39.06%, #000000 100%)",
      name: "بنفش",
    },
  ];
  let CourseImage = "";
  let CoursePoster = "";
  const handleSubmit = () => {
    if (isFree) {
      setPrice("0");
    }
    CourseImage = courseImage.replace(`${config.HttpBaseUrl}/storage/`, "");

    CoursePoster = coursePoster.replace(`${config.HttpBaseUrl}/storage/`, "");

    CoursePoster = coursePoster.replace(
      "/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif",
      ""
    );
    const data = {
      excerpt,
      price,
      description,
      type: isFree,
      ispin: isPin,
      gradient: color,
      img: CourseImage,
      poster: coursePoster,
      videos: JSON.stringify(getLesson),
      name,
      teacher: "مقدم جو",
    };
    if (
      CourseImage !==
      "/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif"
    ) {
      AddCourseService(data).then((res) => {
        if (res.status == 200) {
          toast.success("دوره با موفقیت ساخته شد");
        }
      });
    } else {
      toast.warn("لطفا عکس دوره را انتخاب کنید");
    }
  };
  useEffect(() => {
    UploadedFiles().then((res) => {
      setFiles(res.data.data);
    });

    SingleCourseService(courseId).then((res) => {
      const data = res.data.data;
      setName(data.name);
      setDescription(data.description);
      setColor(data.gradient);
      setCourseImage(data.img);
      setCoursePoster(data.poster);
      setPrice(data.price);
      setLessons(data.videos);
      if (data.ispin == 0) {
        setIsPin(false);
      } else {
        setIsPin(true);
      }
      setIsFree(data.type);
      setExcerpt(data.excerpt);
      console.log(data);
    });
  }, []);
  return (
    <div className="bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl ">
      <form>
        <div className="grid grid-cols-12 xl:gap-6">
          {/* C O U R S E - I M A G E */}
          <div
            className={` ${
              isPin ? "col-span-6" : "col-span-12"
            } relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              src={courseImage}
              className="w-96 rounded-md"
              onClick={() => {
                setUploadModal(1);
              }}
            />
            <label
              className="p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="user_avatar"
            >
              {`انتخاب عکس دوره`}
            </label>
          </div>
          {/* C O U R S E - P O S T E R */}
          {isPin == 1 && (
            <div className="relative col-span-6 flex justify-center flex-col items-center z-0 w-full mb-6 group">
              <img
                src={coursePoster}
                className="w-96 rounded-md"
                onClick={() => {
                  setUploadModal(2);
                }}
              />
              <label
                className="p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="user_avatar"
              >
                {`انتخاب پوستر`}
              </label>
            </div>
          )}
          {/* C O U R S E - N A M E */}
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
              {`نام دوره`}
            </label>
          </div>
          {/* C O U R S E - E X C R E P T */}
          <div className="relative col-span-9 z-0 w-full mb-6 group">
            <input
              type="text"
              name="excrept"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
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
              {`تو ضیحات مختصر`}
            </label>
          </div>
          {/* C O U R S E - D E S C R I B T I O N*/}
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
          {/* C O U R S E  - P R I C E */}
          <div
            className={`${
              isFree == "free" && `hidden`
            } relative col-span-3  z-0 w-full mb-6 group`}
          >
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="price"
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`قیمت ثبت نام در دوره`}
            </label>
          </div>
          {/* C O U R S E  - C H E K B I X E S */}
          <div className="relative  col-span-4  z-0 w-full mb-6 group">
            <div className="flex justify-center">
              <div>
                <div>
                  <input
                    className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white "
                    type="checkbox"
                    id="ispin"
                    checked={isPin}
                    onClick={() => {
                      setIsPin(!isPin);
                    }}
                  />
                  <label
                    className="form-check-label pr-3  inline-block text-gray-800"
                    for="ispin"
                  >
                    در صفحه اصلی پین شود
                  </label>
                </div>
                <div className="mt-3">
                  <input
                    className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white "
                    type="checkbox"
                    value={isFree}
                    id="isfre"
                    checked={isFree == "free" && true}
                    onClick={() => {
                      if (isFree == "price") {
                        setIsFree("free");
                      } else {
                        setIsFree("price");
                      }
                    }}
                  />
                  <label
                    className="form-check-label pr-3  inline-block text-gray-800"
                    for="isfree"
                  >
                    انتشار به صورت رایگان
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* C O U R S E  - C O L O R S */}
          <div className="grid  col-span-5">
            <p className="col-span-12">رنگ خود را انتخاب کنید</p>
            {colors.map((item) => (
              <div className="relative   z-0 w-20 mb-6 group">
                <div
                  onClick={() => setColor(item.color)}
                  style={{ background: `${item.color}` }}
                  className={`border-2  rounded-xl py-2 text-white  cursor-pointer shadow-sm text-center mt-1 ${
                    color == item.color && `border-gray-light shadow-lg`
                  } `}
                >
                  {`${item.name}`}
                </div>
              </div>
            ))}
          </div>
          {/* L E S S O N S */}
          <div className="grid  col-span-12">
            <Lessons />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit"
          className="text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          {`انتشار دوره`}
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
                      setCourseImage(item.url);
                    }
                    if (uploadModal == 2) {
                      setCoursePoster(item.url);
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

export default UpdateCourse;
