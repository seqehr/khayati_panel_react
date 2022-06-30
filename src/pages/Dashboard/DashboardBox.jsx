const DashboardBox = ({ extraClasses = "", children }) => {
	return <div className={`p-5 bg-background2-light dark:bg-background2-dark rounded-2xl ${extraClasses}`}>{children}</div>;
};

export default DashboardBox;
