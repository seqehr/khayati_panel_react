// Components
import { useEffect, useState } from "react";
import { ListArticlesService } from "../../services/ArticleServices";
import TableRow from "./TableRow";

const ListArticles = (props) => {
  const [listArticles, setListArticles] = useState([]);

  useEffect(() => {
    ListArticlesService().then((res) => {
      setListArticles(res.data.data);
    });
  }, []);

  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`عنوان مقاله `}</th>

          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
          {listArticles.map((item) => (
            <TableRow name={item.name} views={item.views} id={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListArticles;
