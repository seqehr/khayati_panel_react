// Context
import { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";

const useTheme = (props) => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
