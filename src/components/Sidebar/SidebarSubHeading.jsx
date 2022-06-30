const SidebarSubHeading = ({ text }) => {
	return (
		<li className="px-8">
			<span className="text-xs font-bold text-black uppercase dark:text-white">{text}</span>
		</li>
	);
};

export default SidebarSubHeading;
