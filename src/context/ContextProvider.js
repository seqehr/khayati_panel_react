import { SidebarContextProvider } from "./sidebar/SidebarContext";
import { ThemeContextProvider } from "./theme/ThemeContext";

const ContextProvider = ({ children }) => {
  return (
    // T H E M E
    <ThemeContextProvider>
      {/* S I D E B A R */}
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </ThemeContextProvider>
  );
};

export default ContextProvider;
