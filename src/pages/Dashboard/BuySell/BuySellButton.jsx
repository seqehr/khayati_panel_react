const BuySellButton = ({ text, active, onClickF }) => {
	return (
		<button
			className={`flex-center py-3 rounded-tr-2xl rounded-tl-2xl ${
				active && "bg-background2-light dark:bg-background2-dark"
			}`}
			onClick={onClickF}
		>
			<span className="text-xl font-medium text-black dark:text-white">{text}</span>
		</button>
	);
};

export default BuySellButton;
