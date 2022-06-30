// Hooks

// Components
import DashboardBox from "../DashboardBox";
import DashboardBoxHead from "../DashboardBoxHead";
import PortfolioItem from "./PortfolioItem";

// Icons
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

const Portfolio = (props) => {
  return (
    <DashboardBox>
      <DashboardBoxHead text={`متن`} />

      {/* —————————— C R Y P T O E S —————————— */}
      <div dir="ltr">
        <ul className="flex flex-col gap-4">
          <PortfolioItem
            icon={<BiBitcoin />}
            iconBackgroundColorClasses="bg-bitcoin-light dark:bg-bitcoin-dark"
            cryptocurrency="Bitcoin"
            symbol="BTC"
            amount={0.0457891}
            worth={256}
          />
          <PortfolioItem
            icon={<FaEthereum />}
            iconBackgroundColorClasses="bg-ethereum-light dark:bg-ethereum-dark"
            cryptocurrency="Ethereum"
            symbol="ETH"
            amount={3.578914}
            worth={384}
          />
          <PortfolioItem
            icon={<BiBitcoin />}
            iconBackgroundColorClasses="bg-bitcoin-light dark:bg-bitcoin-dark"
            cryptocurrency="Bitcoin"
            symbol="BTC"
            amount={0.0457891}
            worth={256}
          />
          <PortfolioItem
            icon={<FaEthereum />}
            iconBackgroundColorClasses="bg-ethereum-light dark:bg-ethereum-dark"
            cryptocurrency="Ethereum"
            symbol="ETH"
            amount={3.578914}
            worth={384}
          />
          <PortfolioItem
            icon={<BiBitcoin />}
            iconBackgroundColorClasses="bg-bitcoin-light dark:bg-bitcoin-dark"
            cryptocurrency="Bitcoin"
            symbol="BTC"
            amount={0.0457891}
            worth={256}
          />
          <PortfolioItem
            icon={<FaEthereum />}
            iconBackgroundColorClasses="bg-ethereum-light dark:bg-ethereum-dark"
            cryptocurrency="Ethereum"
            symbol="ETH"
            amount={3.578914}
            worth={384}
          />
        </ul>
      </div>
    </DashboardBox>
  );
};

export default Portfolio;
