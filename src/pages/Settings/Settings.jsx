import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Sliders } from "../../services/SettingServices";
import defaultImage from "../../assets/images/UF_Infinity_khayati.gif";
import Skeleton from "react-loading-skeleton";
// css
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icons
import { BsPlusCircleDotted } from "react-icons/bs";
import { BsDashCircleDotted } from "react-icons/bs";

// components

const Settings = () => {
  const [imagesSlider, setImagesSlider] = useState([]);
  const [loading, setLoading] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    Sliders().then((res) => {
      setImagesSlider(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl">
      <form>
        <div className="grid grid-cols-12 xl:gap-6">
          {/* site biography */}
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
              {`کلمات کلیدی`}
            </label>
          </div>
          {/* keywords */}
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
              {`بیوگرافی سایت `}
            </label>
          </div>
          {/* Slider setting*/}
          <div className="relative col-span-7 z-0  mb-6 group">
            <Slider {...settings}>
              {loading ? (
                <>
                  <div className="h-52">
                    <Skeleton className="h-full" />
                  </div>
                  <div className="h-10 mt-3">
                    <Skeleton className="h-full" />
                  </div>
                </>
              ) : (
                imagesSlider.map((item) => (
                  <div className=" flex flex-row">
                    <img src={item.img} className="  rounded-md w-full" />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="text-white items-center mt-2 m-auto  text-sm flex justify-center   bg-red-light ring-2 ring-red-dark hover:bg-background-light hover:text-black dark:text-black dark:bg-red-dark hover:ring-2 dark:ring-red-light dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center "
                    >
                      <span className="flex ">
                        <span className="text-xl ml-2">
                          <BsDashCircleDotted />
                        </span>
                        حذف عکس این از اسلایدر
                      </span>
                    </button>
                  </div>
                ))
              )}
            </Slider>
          </div>
          <div className=" grid grid-cols-12 col-span-7 h-10">
            <input
              type="text"
              name="lessonLink"
              id="lessonLink"
              className="block py-2.5 px-2  col-span-8 text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" لینک تصویر جدید را وارد کنید"
              required=""
            />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="text-white items-center flex justify-center col-span-4   text-xs md:text-sm md:mr-3 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center "
            >
              <span className="flex ">
                <span className="text-xl ml-2">
                  <BsPlusCircleDotted />
                </span>
                افزودن تصویر
              </span>
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="text-white mt-10 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          {`ثبت تغییرات `}
        </button>
      </form>
    </div>
  );
};

export default Settings;
