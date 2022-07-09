// Components
import React, { useState } from "react";
import { UploadedFiles } from "../../services/CourseServices";
import TableRow from "./TableRow";

const Files = (props) => {
  const [files, setFiles] = useState([]);
  UploadedFiles().then((res) => {
    setFiles(res.data.data);
  });
  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`نام فایل`}</th>

          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
          {files.map((item) => (
            <TableRow name={item.name} link={item.url} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Files;
