const PortfolioItem = ({ amount, date }) => {
  return (
    <li className="flex items-center gap-2 pt-2">
      <div className="flex flex-col flex-1 ">
        <div className="flex justify-between font-medium text-black dark:text-white">
          <span>{date}</span>
          <span dir="rtl" className="text-green-light ">
            {amount}
            {" ریال"}
          </span>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
