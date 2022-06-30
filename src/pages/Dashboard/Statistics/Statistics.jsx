import { useState } from "react";

// Hooks

import useTheme from "../../../hooks/useTheme";

// Components
import DashboardBox from "../DashboardBox";
import DashboardBoxHead from "../DashboardBoxHead";
import StatisticsDateRangeButton from "./StatisticsDateRangeButton";
import StatisticsChart from "./StatisticsChart";

// MUI
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Icons
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

const Statistics = (props) => {
  const { theme } = useTheme();
  const [selectedCryptocurrency, setSelectedCryptocurrency] =
    useState("bitcoin");
  const [dateRange, setDateRange] = useState(1); // in Days

  return (
    <DashboardBox extraClasses="overflow-hidden">
      <DashboardBoxHead text={`نمودار بازدید وبسایت`} />

      <div>
        {/* —————————— C U R R E N C Y —————————— */}
        <div dir="ltr" className="mb-6">
          <div className="flex">
            <div className="flex items-center gap-1 text-green-light dark:text-green-dark">
              <span>+0.27%</span>
              <i>
                <RiArrowRightUpLine />
              </i>
            </div>
          </div>
        </div>
        {/* —————————— D A T E - R A N G E —————————— */}
        <div dir="ltr">
          <ul className="flex justify-end gap-4 text-sm text-aligncenter">
            <StatisticsDateRangeButton
              text="24H"
              onClick={() => setDateRange(1)}
              active={dateRange === 1}
            />
            <StatisticsDateRangeButton
              text="1W"
              onClick={() => setDateRange(7)}
              active={dateRange === 7}
            />
            <StatisticsDateRangeButton
              text="1M"
              onClick={() => setDateRange(30)}
              active={dateRange === 30}
            />
            <StatisticsDateRangeButton
              text="1Y"
              onClick={() => setDateRange(365)}
              active={dateRange === 365}
            />
            <StatisticsDateRangeButton
              text="5Y"
              onClick={() => setDateRange(1825)}
              active={dateRange === 1825}
            />
          </ul>
        </div>
        {/* —————————— C H A R T —————————— */}
        <div dir="ltr" style={{ width: "100%", height: "400px" }}>
          <StatisticsChart />
        </div>
      </div>
    </DashboardBox>
  );
};

export default Statistics;
