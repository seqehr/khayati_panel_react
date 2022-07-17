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
      <DashboardBoxHead text={`فروش های اخیر`} />

      {/* —————————— C R Y P T O E S —————————— */}
      <div dir="ltr">
        <ul className="flex flex-col gap-4">
          <PortfolioItem amount={" 35,500,000 "} date={"1402/5/21"} />
          <PortfolioItem amount={" 45,500,000 "} date={"1402/5/11"} />
          <PortfolioItem amount={" 55,500,000 "} date={"1402/5/21"} />
          <PortfolioItem amount={" 25,500,000 "} date={"1402/5/11"} />
          <PortfolioItem amount={" 25,500,000 "} date={"1402/5/21"} />
          <PortfolioItem amount={" 75,500,000 "} date={"1402/5/21"} />
          <PortfolioItem amount={" 15,500,000 "} date={"1402/5/21"} />
          <PortfolioItem amount={" 35,500,000 "} date={"1402/5/11"} />
          <PortfolioItem amount={" 95,500,000 "} date={"1402/5/21"} />
          <PortfolioItem amount={" 85,500,000 "} date={"1402/5/11"} />
          <PortfolioItem amount={" 25,500,000 "} date={"1402/5/21"} />
          <PortfolioItem amount={" 25,500,000 "} date={"1402/5/21"} />
        </ul>
      </div>
    </DashboardBox>
  );
};

export default Portfolio;
