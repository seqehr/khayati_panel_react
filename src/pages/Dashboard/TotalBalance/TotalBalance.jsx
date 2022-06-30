// Components
import DashboardBox from "../DashboardBox";
import DashboardBoxHead from "../DashboardBoxHead";

// Hooks

// Icons
import { MdAttachMoney } from "react-icons/md";

// CSS
import style from "./TotalBalance.module.scss";

const TotalBalance = (props) => {
  return (
    <DashboardBox>
      {/* ————— H E A D ————— */}
      <DashboardBoxHead text={`متن`} />

      {/* ————— My Balance & Income/Expense ————— */}
      <div className={`${style.myBalanceAndIncomeBox}`}>
        {/* My Balance */}
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-gray-light dark:text-gray-dark">{`متن`}</span>
          </div>
          <div>
            <span className="text-3xl font-medium text-black dark:text-white">
              $932,128.00
            </span>
          </div>
          <div>
            <span className="text-gray-light dark:text-gray-dark">
              19.456187 BTC
            </span>
          </div>
        </div>

        {/* Income/Expense */}
        <div className="grid grid-cols-2 gap-5">
          {/* Income */}
          <div className="">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#EDF1FD] dark:bg-[#1C2134] w-11 h-11 rounded-xl flex-center">
                <i className="text-2xl text-blue-light dark:text-blue-dark">
                  <MdAttachMoney />
                </i>
              </div>
              <div>
                <div>
                  <span className="font-semibold text-black dark:text-white">
                    $1,331.00
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-light dark:text-gray-dark">
                    {`متن`}
                  </span>
                </div>
              </div>
            </div>

            {/* Receive Button */}
            <div className="">
              <button className="w-full p-3 text-sm text-white uppercase bg-blue-light dark:bg-blue-dark rounded-2xl">
                {`متن`}
              </button>
            </div>
          </div>

          {/* Expense */}
          <div className="">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#F0FBFD] dark:bg-[#212832] w-11 h-11 rounded-xl flex-center">
                <i className="text-2xl text-blue-light dark:text-blue-dark">
                  <MdAttachMoney />
                </i>
              </div>
              <div>
                <div>
                  <span className="font-semibold text-black dark:text-white">
                    $234.00
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-light dark:text-gray-dark">
                    {`متن`}
                  </span>
                </div>
              </div>
            </div>

            {/* Send Button */}
            <div className="">
              <button className="w-full p-3 text-sm font-medium text-white uppercase bg-teal-light dark:bg-teal-dark rounded-2xl">
                {`متن`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardBox>
  );
};

export default TotalBalance;
