// Components
import { useEffect, useState } from "react";
import { ListMembersService } from "../../services/MemberServices";
import TableRow from "./TableRow";
import Skeleton from "react-loading-skeleton";
// css
import "react-loading-skeleton/dist/skeleton.css";
const ListMembers = (props) => {
  const [listMembers, setListMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      // get  members
    ListMembersService().then((res) => {
      setListMembers(res.data.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <table className="w-full overflow-hidden rounded-2xl">
        <thead
          className={`${"text-right"} bg-[#80808033] text-black dark:text-white `}
        >
          <th className="px-2 py-2 pr-4">{`نام کامل`}</th>
          <th>{`شماره تلفن`}</th>

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
              </tr>
            </>
          ) : (
            listMembers.map((item) => (
              <TableRow name={item.name} phone={item.phone} id={item.id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListMembers;
