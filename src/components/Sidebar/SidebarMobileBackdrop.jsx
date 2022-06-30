// Style
import style from "./Sidebar.module.scss";

const SidebarMobileBackdrop = ({ onClickF, sidebarTwo }) => {
  return (
    <div
      className={`bg-black  ${
        sidebarTwo
          ? style.asideMobileBackdrop_sidebarTwo
          : style.asideMobileBackdrop
      }`}
      onClick={onClickF}
    ></div>
  );
};

export default SidebarMobileBackdrop;
