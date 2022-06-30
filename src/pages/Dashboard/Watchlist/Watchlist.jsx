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
      <DashboardBoxHead text={`متن`} />

      {/* ————— W A T C H L I S T ————— */}
      <div className={`overflow-x-auto ${style.watchlistCoinsBox}`}>
        <div className="flex gap-4 mb-4">
          <WhatchlistCoin
            icon={<BiBitcoin />}
            name={`متن`}
            symbol="BTC"
            color="#FF9416"
            chartData={bitcoinData}
            price={43577}
            delta={0.27}
          />
          <WhatchlistCoin
            icon={<FaEthereum />}
            name={`دوره دوردوزی`}
            color="#2E2E87"
            chartData={bitcoinData}
            price={43577}
            delta={-0.15}
          />
          <WhatchlistCoin
            icon={<FaEthereum />}
            name={`متن`}
            symbol="ETH"
            color="#2E2E87"
            chartData={bitcoinData}
            price={43577}
            delta={-0.15}
          />
          <WhatchlistCoin
            icon={<FaEthereum />}
            name={`متن`}
            symbol="ETH"
            color="#2E2E87"
            chartData={bitcoinData}
            price={43577}
            delta={-0.15}
          />
        </div>
      </div>
    </div>
  );
};

export default Whatchlist;
