// Hooks

// Icons
import { MdClose } from "react-icons/md";

// Style
import style from "./Sidebar.module.scss";

const SidebarMobileCloseButton = ({ onClickHandler }) => {
  const directionClass = style.asideMobileCloseButtonRtl;

  return (
    <button
      className={`${style.asideMobileCloseButton} ${directionClass}`}
      onClick={onClickHandler}
    >
      <i className="text-2xl text-black dark:text-white">
        <MdClose />
      </i>
    </button>
  );
};

export default SidebarMobileCloseButton;
