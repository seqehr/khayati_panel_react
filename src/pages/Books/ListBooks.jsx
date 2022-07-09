// Components
import { useEffect, useState } from "react";
import { ListBooksService } from "../../services/BookServices";
import TableRow from "./TableRow";

const ListBooks = (props) => {
  const [listBooks, setListBooks] = useState([]);

  useEffect(() => {
    ListBooksService().then((res) => {
      setListBooks(res.data.data);
    });
  }, []);

  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`عنوان کتاب `}</th>

          <th></th>
          <th></th>
        </thead>
        <tbody className="bg-background2-light dark:bg-background2-dark ">
          {listBooks.map((item) => (
            <TableRow name={item.name} views={item.views} id={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooks;
