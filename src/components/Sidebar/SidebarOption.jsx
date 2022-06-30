import { Link } from "react-router-dom";

// Hooks

const SidebarOption = ({ to, icon, title, active = false }) => {
  return (
    <li
      className={`relative px-8 ${
        active ? "after:block" : "after:hidden"
      } after:content-[''] after:absolute after:top-0 ${"after:left-0"} after:w-0.5 after:h-full after:rounded after:bg-blue-light dark:after:bg-white `}
    >
      <Link
        to={to}
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
      </Link>
    </li>
  );
};

export default SidebarOption;
