const UnitButton = ({
  text,
  onClick = () => {},
  middle = false,
  active = false,
}) => {
  const defaultClasses = "px-2 text-black dark:text-white duration-200";
  const middleButtonClasses =
    "border-r border-l border-gray-light dark:border-gray-dark";
  const activeButtonClasses = "text-white bg-blue-light dark:bg-blue-dark";
  const inActiveButtonHoverClass = "hover:bg-[#1654f01a]";

  return (
    <button
      onClick={onClick}
      className={`h-[30px] dark:text-white dark:bg-background-dark   ${defaultClasses} ${
        middle && middleButtonClasses
      } ${active ? activeButtonClasses : inActiveButtonHoverClass}`}
    >
      {text}
    </button>
  );
};

export default UnitButton;
