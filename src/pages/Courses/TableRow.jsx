// Icons
import { MdAutorenew } from "react-icons/md";
import { DeleteCoursesService } from "../../services/CourseServices";

// css
import style from "./TableRow.module.scss";
const WalletTableRow = ({ name, views, date, id }) => {
  return (
    <tr key={id} className={`${style.walletTableRow} `}>
      <td className="py-2 pr-4">
        <div className="flex items-center gap-2">
          <div>
            <div>
              <span className="text-sm  text-black sm:text-base dark:text-white">
                {name}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>
      <td className="py-2">
        <div>
          <div className="flex gap-2 text-sm text-black sm:text-base dark:text-white">
            <span>
              {date[0]}/{date[1]}/{date[2]}
            </span>
          </div>
        </div>
      </td>
      <td className="py-2">
        <div>
          <div className="flex gap-2 text-sm text-black sm:text-base dark:text-white">
            <span>{views}</span>
          </div>
        </div>
      </td>

      <div className="float-left">
        <td className="px-1 py-3 sm:py-2 sm:px-1">
          <div className="flex flex-col justify-end gap-2 sm:flex-row">
            <button
              onClick={() => DeleteCoursesService(id)}
              className="px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-red-light dark:bg-red-dark rounded-2xl "
            >
              {`پاک کردن`}
            </button>
          </div>
        </td>
        <td className="px-1 py-3 sm:py-2 sm:px-1">
          <div className="flex flex-col justify-end gap-2 sm:flex-row">
            <button className="px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-blue-light dark:bg-blue-dark rounded-2xl ">
              {`ویرایش`}
            </button>
          </div>
        </td>
      </div>
    </tr>
  );
};

export default WalletTableRow;
