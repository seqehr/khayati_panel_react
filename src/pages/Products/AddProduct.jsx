import React, { useEffect, useState } from "react";
import { Radio } from "@material-tailwind/react";
import ArticleImageDefault from "../../assets/images/UF_Infinity_khayati.gif";
// css
import "./CKEditor.css";
import style from "./TableRow.module.scss";

import {
  AddProductService,
  CatListService,
  UploadedFiles,
} from "../../services/ProductServices";
//icons
import { BsPlusCircleDotted } from "react-icons/bs";
import { BsDashCircleDotted } from "react-icons/bs";
import { AiFillPlusSquare } from "react-icons/ai";
// components
import TableRow from "./ModalTableRow";
import config from "../../services/config.json";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { toast } from "react-toastify";
import { ChekLoginUser } from "../../services/UserService";

const AddProduct = (props) => {
  const [files, setFiles] = useState([]);
  const [categorries, setCategorries] = useState([]);
  const [uploadModal, setUploadModal] = useState(false);

  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState(ArticleImageDefault);
  const [catId, setCatId] = useState(1);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  let ProductImage = "";
  const handleSubmit = () => {
    ProductImage = productImage.replace(`${config.HttpBaseUrl}/storage/`, "");

    const data = {
      name,
      cat_id: catId,
      img: ProductImage,
      content: description,
      price,
    };
    if (
      productImage !==
      "/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif"
    ) {
      AddProductService(data).then((res) => {
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
    CatListService().then((res) => {
      setCategorries(res.data.data);
    });
  }, []);

  return (
    <div className="bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl">
      <form>
        <div className="grid grid-cols-12 xl:gap-6">
          {/* A R T I C L E -  I M A G E */}
          <div
            className={` ${"col-span-12"} relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              onClick={() => setUploadModal(true)}
              src={productImage}
              className="w-96 rounded-md"
            />
            <label
              className="p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="user_avatar"
            >
              {`انتخاب عکس مصحول`}
            </label>
          </div>

          {/* A R T I C L E  - N A M E */}
          <div className="relative col-span-6 px-1 z-0 w-full mb-6 group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
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
          {/* A R T I C L E - C A T */}
          <div
            className={` ${"col-span-3"}  relative  flex  justify-center flex-col  z-0 w-full mb-6 group`}
          >
            <select
              id="countries"
              name="countries"
              onChange={(e) => {
                setCatId(e.target.value);
                console.log(catId);
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
          {/* C O U R S E  - P R I C E */}
          <div className={` relative col-span-3  z-0 w-full mb-6 group`}>
            <input
              type="number"
              name="price"
              id="price"
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
              {`قیمت محصول`}
            </label>
          </div>

          {/* A R T I C L E  - D E S C R I B T I O N*/}
          <div className="relative col-span-12 z-0 w-full mb-6 group">
            <CKEditor
              editor={ClassicEditor}
              className={`text-right right-0`}
              data="<p>ویرایشگر پیشرفته</p>"
              // this will we change  =>  {data} has html

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
          {`انتشار محصول`}
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
                  onClick={() => setProductImage(item.url)}
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

export default AddProduct;
