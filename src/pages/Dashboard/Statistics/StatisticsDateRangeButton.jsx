const StatisticsDateRangeButton = ({ text, onClick, active = false }) => {
	return (
		<li>
			<button
				onClick={onClick}
				className={`px-1
                py-0.5
                ${!active && "text-gray-light dark:text-gray-dark"}
                ${active && "text-black dark:text-white border-b-2 border-black dark:border-white font-medium"}
                `}
			>
				{text}
			</button>
		</li>
	);
};

export default StatisticsDateRangeButton;
