// Components
import { useEffect, useState } from "react";
import {
  ListArticlesService,
  DeleteArticleService,
} from "../../services/ArticleServices";
import TableRow from "./TableRow";
import Skeleton from "react-loading-skeleton";
// css
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";

const ListArticles = (props) => {
  const [listArticles, setListArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ListArticlesService().then((res) => {
      setListArticles(res.data.data);
      setLoading(false);
    });
  }, []);
  const handleDelete = (id) => {
    toast.error(
      <p>
        <span className="pl-2">عملیات بازگشت پذیر نیست </span>
        <span
          onClick={() => confirmDelete()}
          className=" p-2 px-3  bg-red-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300"
        >
          حذف شود!
        </span>
      </p>
    );
    const confirmDelete = () => {
      DeleteArticleService(id);
      setListArticles(listArticles.filter((i) => i.id !== id));
    };
  };
  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`عنوان مقاله `}</th>
          <th className="px-2 py-2 pr-4">{`تعداد بازدید `}</th>
          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
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
            listArticles.map((item) => (
              <TableRow
                name={item.name}
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

export default ListArticles;
