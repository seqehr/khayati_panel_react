const PortfolioItem = ({ icon, iconBackgroundColorClasses, cryptocurrency, symbol, amount, worth }) => {
	return (
		<li className="flex items-center gap-2">
			<div>
				<i className={`inline-block p-1 rounded-full text-white ${iconBackgroundColorClasses}`}>{icon}</i>
			</div>
			<div className="flex flex-col flex-1">
				<div className="flex justify-between font-medium text-black dark:text-white">
					<span>{cryptocurrency}</span>
					<span>{amount}</span>
				</div>
				<div className="flex justify-between text-xs text-gray-light dark:text-gray-dark">
					<span>{symbol}</span>
					<span>${worth}</span>
				</div>
			</div>
		</li>
	);
};

export default PortfolioItem;
