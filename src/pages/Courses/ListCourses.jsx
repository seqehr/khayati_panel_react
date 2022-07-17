// Components
import TableRow from "./TableRow";
import React, { useEffect, useState } from "react";

import {
  DeleteCoursesService,
  ListCoursesService,
} from "../../services/CourseServices";
import Skeleton from "react-loading-skeleton";
// css
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";

const ListCourses = (props) => {
  const [listCourses, setListCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ListCoursesService().then((res) => {
      setListCourses(res.data.data);
      setLoading(false);
    });
  }, []);
  const handleDelete = (id) => {
    toast.error(
      <p dir="rtl">
        <span className="pl-2">مجدد تایید کنید</span>
        <span
          onClick={() => confirmDelete()}
          className=" p-2 px-3  bg-red-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300"
        >
          حذف شود!
        </span>
      </p>
    );
    const confirmDelete = () => {
      DeleteCoursesService(id);
      setListCourses(listCourses.filter((i) => i.id !== id));
    };
  };

  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`نام دوره`}</th>
          <th>{`تاریخ ایجاد`}</th>
          <th>{`تعداد بازدید`}</th>

          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
          {loading ? (
            <>
              <tr>
                <td className="py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td className="py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
                <td className=" py-2 px-2">
                  <Skeleton />
                </td>
              </tr>
            </>
          ) : (
            listCourses.map((item) => (
              <TableRow
                name={item.name}
                date={item.update}
                views={item.views}
                id={item.id}
                handleDelete={handleDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListCourses;
