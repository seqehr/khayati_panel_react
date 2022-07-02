import React, { useState } from "react";
import { Radio } from "@material-tailwind/react";
import CourseImageDefault from "../../assets/images/UF_Infinity_khayati.gif";
// Hooks

const AddCourse = (props) => {
  const [courseImage, setCourseImage] = useState(CourseImageDefault);
  const [color, setColor] = useState("");
  const [isPin, setIsPin] = useState(false);
  const [isFree, setIsFree] = useState(false);

  const colors = [
    {
      color: "linear-gradient(180deg, #F90000 39.06%, #000000 100%)",
      name: "red",
    },
    {
      color: "linear-gradient(180deg, #3D39FF 39.06%, #000000 100%)",
      name: "blue",
    },
    {
      color: "linear-gradient(180deg, #A900F9 39.06%, #000000 100%)",
      name: "magenta",
    },
  ];
  return (
    <div className="bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl">
      <form>
        <div className="grid grid-cols-12 xl:gap-6">
          {/* C O U R S - E I M A G E */}
          <div
            className={` ${
              isPin ? "col-span-6" : "col-span-12"
            } relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img src={courseImage} className="w-96 rounded-md" />
            <label
              className="p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="user_avatar"
            >
              {`انتخاب عکس دوره`}
            </label>
            <input
              onChange={(event) =>
                setCourseImage(URL.createObjectURL(event.target.files[0]))
              }
              className="p-1  text-black dark:text-white hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar"
              id="user_avatar"
              type="file"
            />
          </div>
          {/* C O U R S E - P O S T E R */}
          {isPin && (
            <div className="relative col-span-6 flex justify-center flex-col items-center z-0 w-full mb-6 group">
              <img src={courseImage} className="w-96 rounded-md" />
              <label
                className="p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="user_avatar"
              >
                {`انتخاب پوستر`}
              </label>
              <input
                onChange={(event) =>
                  setCourseImage(URL.createObjectURL(event.target.files[0]))
                }
                className="p-1  text-black dark:text-white hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar"
                id="user_avatar"
                type="file"
              />
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
            <textarea
              rows="7"
              type="text"
              name="courseDescribtion"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="courseDescribtion"
              className={`  ${"right-0"}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`توضیحات کامل ...`}
            </label>
          </div>
          {/* C O U R S E  - P R I C E */}
          <div
            className={`${
              isFree && `hidden`
            } relative col-span-2   z-0 w-full mb-6 group`}
          >
            <input
              type="number"
              name="price"
              id="price"
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
          <div className="relative col-span-2  z-0 w-full mb-6 group">
            <div class="flex justify-center">
              <div>
                <div>
                  <input
                    class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white "
                    type="checkbox"
                    value=""
                    id="ispin"
                    onClick={() => setIsPin(!isPin)}
                  />
                  <label
                    class="form-check-label pr-3  inline-block text-gray-800"
                    for="ispin"
                  >
                    در صفحه اصلی پین شود
                  </label>
                </div>
                <div class="mt-3">
                  <input
                    class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white "
                    type="checkbox"
                    value=""
                    id="isfree"
                    onClick={() => setIsFree(!isFree)}
                  />
                  <label
                    class="form-check-label pr-3  inline-block text-gray-800"
                    for="isfree"
                  >
                    انتشار به صورت رایگان
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* C O U R S E  - C O L O R S */}
          <div className="grid grid-cols-6 xl:gap-1 col-span-2">
            <p className="col-span-6">رنگ خود را انتخاب کنید</p>
            {colors.map((item) => (
              <div className="relative col-span-2  z-0 w-full mb-6 group">
                <div
                  onClick={() => setColor(item.name)}
                  style={{ background: `${item.color}` }}
                  className={`border-2  rounded-xl py-2 text-white  cursor-pointer shadow-sm text-center mt-1 ${
                    color == item.name && `border-gray-light shadow-lg`
                  } `}
                >
                  {`${item.name}`}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          {`انتشار دوره`}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
