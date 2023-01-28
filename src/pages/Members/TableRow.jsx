import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { MdAutorenew } from "react-icons/md";
import { Link } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";
import { userJustify } from "../../services/MemberServices";
import * as shamsi from "shamsi-date-converter";
// css
import style from "./TableRow.module.scss";
import UserModal from "./UserModal";
import { ListCoursesService } from "../../services/CourseServices";
import { DeleteUser } from "../../services/CourseServices";
// Icons
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
const TableRow = ({ name, phone, id, key, fullDetails }) => {
  const { token } = useToken();
  const [isOpeModal, setIsOpeModal] = useState(false);
  const SendDeleteUser = (id) => {
    console.log(id);
    DeleteUser(id, token).then((res) => {
      toast.success("کاربر با موفقیت حذف شد");
      // get list agai
    });
  };

  return (
    <tr key={key} className={`${style.walletTableRow} `}>
      <td className="py-2 pr-4">
        <div className="flex items-center gap-2">
          <div>
            <div>
              <span className="text-sm text-black sm:text-base dark:text-white">
                {name}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>
      <td className="py-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-center text-black sm:text-base dark:text-white">
            <span>{fullDetails.id}</span>
          </div>
        </div>
      </td>
      <td className="py-2">
        <div>
          <div className="flex gap-2 text-sm text-black sm:text-base dark:text-white">
            <span>{phone}</span>
          </div>
        </div>
      </td>{" "}
      <td className="py-2">
        <div>
          <div className="flex gap-2 text-sm text-black sm:text-base dark:text-white">
            <span>
              {shamsi
                .gregorianToJalali(fullDetails.created_at)
                .map((i) => i)
                .join("/")}
            </span>
          </div>
        </div>
      </td>
      <div className="float-left">
        <td className="px-1 py-3 sm:py-2 sm:px-1">
          <div className="flex flex-col justify-end gap-2 sm:flex-row">
            <Link
              to={`/permission/member/${id}`}
              className="flex px-2 py-1 text-sm text-white rounded-lg sm:px-5 sm:text-base bg-ethereum-light dark:bg-ethereum-dark "
            >
              {`مجوز ها `} <SiSpringsecurity className="pt-1 mr-2 text-xl" />
            </Link>
            <div
              onClick={() => {
                SendDeleteUser(id);
              }}
              className="flex px-2 py-1 text-sm text-white rounded-lg sm:px-5 sm:text-base bg-ethereum-light dark:bg-ethereum-dark "
            >
              {`حذف کاربر`} <SiSpringsecurity className="pt-1 mr-2 text-xl" />
            </div>
          </div>
        </td>
        <td className="px-1 py-3 sm:py-2 sm:px-1">
          <div className="flex flex-col justify-end gap-2 sm:flex-row">
            <Link
              to={`/courses/member/${id}`}
              className="px-2 py-1 text-sm text-white rounded-lg sm:px-5 sm:text-base bg-bitcoin-light dark:bg-bitcoin-dark "
            >
              {`دوره ها`}
            </Link>
          </div>
        </td>

        <td className="px-1 py-3 sm:py-2 sm:px-1">
          <div
            className="flex flex-col justify-end gap-2 sm:flex-row"
            onClick={() => setIsOpeModal(!isOpeModal)}
          >
            <p className="flex items-center justify-center gap-2 px-2 py-1 text-sm text-white rounded-lg cursor-pointer sm:px-5 sm:text-base bg-bitcoin-light dark:bg-bitcoin-dark">
              نمایش <AiFillEye className="text-xl" />
            </p>
          </div>
        </td>
        <td className="px-1 py-3 sm:py-2 sm:px-1">
          <div
            className="flex flex-col justify-end gap-2 sm:flex-row"
            onClick={() => setIsOpeModal(!isOpeModal)}
          >
            <Link
              to={`/member/edit/${fullDetails.id}`}
              className="flex items-center justify-center gap-2 px-2 py-1 text-sm text-white rounded-lg cursor-pointer sm:px-5 sm:text-base bg-bitcoin-light dark:bg-bitcoin-dark"
            >
              ویرایش <BiEdit className="text-xl" />
            </Link>
          </div>
        </td>
      </div>
      {/* user Modal*/}
      {isOpeModal && (
        <UserModal fullDetails={fullDetails} close={setIsOpeModal} />
      )}
    </tr>
  );
};

export default TableRow;
