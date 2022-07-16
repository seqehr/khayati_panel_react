// Components
import { useEffect, useState } from "react";
import {
  ListProductsService,
  DeleteProductService,
} from "../../services/ProductServices";
import TableRow from "./TableRow";
import Skeleton from "react-loading-skeleton";
// css
import "react-loading-skeleton/dist/skeleton.css";

const ListProducts = (props) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ListProductsService().then((res) => {
      setListProducts(res.data.data);
      setLoading(false);
    });
  }, []);
  const handleDelete = (id) => {
    DeleteProductService(id);
    setListProducts(listProducts.filter((i) => i.id !== id));
  };
  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`عنوان محصول `}</th>
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
            listProducts.map((item) => (
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

export default ListProducts;