// Components
import TableRow from "./TableRow";
import React, { useEffect, useState } from "react";

import { ListCoursesService } from "../../services/CourseServices";
const ListCourses = (props) => {
  const [listCourses, setListCourses] = useState([]);

  useEffect(() => {
    ListCoursesService().then((res) => {
      setListCourses(res.data.data);
    });
  }, []);

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
          {listCourses.map((item) => (
            <TableRow
              name={item.name}
              date={item.update}
              views={item.views}
              id={item.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCourses;
