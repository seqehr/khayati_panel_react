// Components
import React, { useEffect, useState } from "react";
import { UploadedFiles } from "../../services/CourseServices";
import TableRow from "./TableRow";
import Skeleton from "react-loading-skeleton";
// css
import "react-loading-skeleton/dist/skeleton.css";
// hooks
import useUpload from "../../hooks/useUpload";

const Files = (props) => {
  const { files, setFiles } = useUpload();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    UploadedFiles().then((res) => {
      setFiles(res.data.data);
      setLoading(false);
    });
  }, []);
  const handleDelete = (id) => {
    //DeleteArticleService(id);
    setFiles(files.filter((i) => i.id !== id));
  };
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
          {console.log(files)}
          {loading ? (
            <>
              <tr>
                <td className="w-3/4 py-2 px-2">
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
                <td className="w-3/4 py-2 px-2">
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
                <td className="w-3/4 py-2 px-2">
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
            files.map((item) => (
              <TableRow
                name={item.name}
                link={item.url}
                handleDelete={handleDelete}
                id={item.id}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Files;
