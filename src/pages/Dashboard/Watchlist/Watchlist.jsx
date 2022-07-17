// Hooks

// Components
import DashboardBoxHead from "../DashboardBoxHead";
import WhatchlistCoin from "./WatchlistCoin";

// Icons
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

// Data
import { bitcoinData } from "./watchlistData";

// CSS
import style from "./Watchlist.module.scss";

const Whatchlist = (props) => {
  const boxClass_basedOnDirection = "pt-5 pr-5 pb-5";

  return (
    <div
      className={`bg-background2-light dark:bg-background2-dark rounded-2xl ${boxClass_basedOnDirection}`}
    >
      {/* ————— H E A D ————— */}
      <DashboardBoxHead text={`فروش های دوره ها`} />

      {/* ————— W A T C H L I S T ————— */}
      <div className={`overflow-x-auto ${style.watchlistCoinsBox}`}>
        <div className="flex gap-4 my-4">
          <WhatchlistCoin
            icon={<BiBitcoin />}
            name={`دوره دور دوزی`}
            color="#FF9416"
            chartData={bitcoinData}
            price={"250,480,000"}
            delta={0.27}
          />
          <WhatchlistCoin
            icon={<BiBitcoin />}
            name={`دوره خیاطی`}
            color="#FF9416"
            chartData={bitcoinData}
            price={"250,480,000"}
            delta={0.27}
          />
          <WhatchlistCoin
            icon={<BiBitcoin />}
            name={`دوره 2`}
            color="#FF9416"
            chartData={bitcoinData}
            price={"250,480,000"}
            delta={0.27}
          />
          <WhatchlistCoin
            icon={<BiBitcoin />}
            name={`دوره 3`}
            color="#FF9416"
            chartData={bitcoinData}
            price={"250,480,000"}
            delta={0.27}
          />
        </div>
      </div>
    </div>
  );
};

export default Whatchlist;
