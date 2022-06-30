// Components
import TotalBalance from "./TotalBalance/TotalBalance";
import Whatchlist from "./Watchlist/Watchlist";
import Statistics from "./Statistics/Statistics";
import BuySell from "./BuySell/BuySell";
import Portfolio from "./Portfolio/Portfolio";

// CSS
import style from "./Dashboard.module.scss";

const Dashboard = (props) => {
  return (
    <div className={`${style.dashboard}`}>
      {/* One Side */}
      <div className="flex flex-col gap-6 flex-2">
        <TotalBalance />
        <Whatchlist />
        <Statistics />
      </div>

      {/* Other Side */}
      <div>
        <BuySell />
        <Portfolio />
      </div>
    </div>
  );
};

export default Dashboard;
