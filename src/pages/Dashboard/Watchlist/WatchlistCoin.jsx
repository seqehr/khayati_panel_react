// Libraries
import { LineChart, Line } from "recharts";

// Icons
import { RiArrowRightUpLine, RiArrowRightDownLine } from "react-icons/ri";

const WhatchlistCoin = ({ icon, name, symbol, color, chartData, price, delta }) => {
	const deltaClass = delta < 0 ? "text-red-light dark:text-red-dark" : "text-green-light dark:text-green-dark";

	return (
		<div className="w-80">
			<div className="flex gap-2 mb-3">
				<div>
					<i
						className={`w-6 h-6 rounded-full flex-center text-white text-lg`}
						style={{ backgroundColor: color }}
					>
						{icon}
					</i>
				</div>
				<div className="flex items-center gap-1">
					<span className="text-black dark:text-white font-medium">{name}</span>
					<span className="text-gray-light dark:text-gray-dark text-xs uppercase">{symbol}</span>
				</div>
			</div>
			<div className="bg-[#F9F9F9] dark:bg-[#24242C] flex gap-4 p-2 rounded-2xl">
				{/* Chart Box */}
				<div>
					<LineChart width={130} height={80} data={chartData}>
						<Line type="monotone" dataKey="price" stroke={color} strokeWidth={2} dot={false} />
					</LineChart>
				</div>
				{/* Delta */}
				<div className="bg-white dark:bg-[#2C2C33] flex-1 rounded-2xl py-2 px-4 flex-center flex-col gap-1">
					<div>
						<span className="text-black dark:text-white font-bold text-xl">
							{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
						</span>
					</div>
					<div className={`flex gap-2 items-center ${deltaClass}`}>
						<span className="">
							{delta > 0 && "+"}
							{delta}%
						</span>
						<i>{delta < 0 ? <RiArrowRightDownLine /> : <RiArrowRightUpLine />}</i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatchlistCoin;
