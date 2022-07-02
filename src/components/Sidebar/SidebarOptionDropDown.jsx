const SidebarOptionDropDown = ({ onClickF, icon, title, active = false }) => {
  return (
    <li onClick={onClickF} className={`relative px-8 cursor-pointer`}>
      <div
        className={`flex items-center gap-2 text-lg font-medium  ${
          active
            ? "text-blue-light dark:text-white"
            : "text-gray-light dark:text-gray-dark"
        }`}
      >
        <div>
          <i>{icon}</i>
        </div>
        <div>
          <span>{title}</span>
        </div>
      </div>
    </li>
  );
};

export default SidebarOptionDropDown;
