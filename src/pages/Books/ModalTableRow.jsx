// Icons
import { MdAutorenew } from "react-icons/md";
import { toast } from "react-toastify";

// css
import style from "./TableRow.module.scss";
const WalletTableRow = ({ name, link, onClickf }) => {
  return (
    <>
      <td className="py-2 pr-4">
        <div className="flex items-center gap-2">
          <div>
            <div
              className={`${style.myLink} flex overflow-x-scroll overflow-y-hidden sm:overflow-hidden max-w-[70px] sm:max-w-full gap-2 text-sm text-black sm:text-base dark:text-white`}
            >
              <span
                className={`${style.myLink} overflow-x-scroll overflow-y-hidden overflow max-w-[400px] md:max-w-[800px]`}
              >
                {name}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </td>

      <td className="px-1 py-3 sm:py-2 sm:px-2">
        <div className="flex flex-col justify-end gap-2 sm:flex-row">
          <button
            onClick={() => {}}
            className="px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-blue-light dark:bg-blue-dark rounded-2xl "
          >
            {`انتخاب فایل`}
          </button>
        </div>
      </td>
    </>
  );
};

export default WalletTableRow;
