import { toast } from "react-toastify";
import React from "react";
// css
import style from "./TableRow.module.scss";
const WalletTableRow = ({ name, link, handleDelete, id }) => {
  return (
    <tr key={id} className={`${style.walletTableRow} overflow-hidden `}>
      <td className="py-2 pr-4">
        <div className="flex items-center gap-2">
          <div>
            <div
              className={`${style.myLink} flex overflow-hidden my-1 overflow-y-hidden sm:overflow-hidden max-w-[70px] sm:max-w-full gap-2 text-sm text-black sm:text-base dark:text-white`}
            >
              <span
                className={`${style.myLink} overflow-hidden overflow-y-hidden overflow max-w-[400px] md:max-w-[800px]`}
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
            onClick={() => {
              /* Copy the text inside the text field */

              const clipboard = navigator.clipboard;
              if (clipboard == undefined) {
                toast.error("کلیپبورد شما شناسایی نشد");
              } else {
                clipboard.writeText(link).then(
                  function () {
                    toast.success("لینک با موفقیت کپی شد");
                  },
                  function () {
                    toast.error("کپی شدن لینک امکان پذیر نیست");
                  }
                );
              }
            }}
            className="px-2 sm:px-5 py-1 text-sm text-white sm:text-base bg-blue-light dark:bg-blue-dark rounded-2xl "
          >
            {`کپی کردن لینک`}
          </button>
        </div>
      </td>
      <td className="px-1 py-3 sm:py-2 sm:px-2">
        <div className="flex flex-col justify-end gap-2 sm:flex-row">
          <button
            onClick={() => handleDelete(id)}
            className="px-2 py-1 text-sm text-white sm:text-base bg-red-light dark:bg-red-dark rounded-2xl "
          >
            {`پاک کردن`}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WalletTableRow;
