import { CourseContextProvider } from "./Courses/CoursesContext";
import { SidebarContextProvider } from "./sidebar/SidebarContext";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { UploadContextProvider } from "./Upload/UploadContext";

const ContextProvider = ({ children }) => {
  return (
    // T H E M E
    <ThemeContextProvider>
      {/* S I D E B A R */}
      <SidebarContextProvider>
        {/* U P L O A D*/}
        <UploadContextProvider>
          <CourseContextProvider> {children}</CourseContextProvider>
        </UploadContextProvider>
      </SidebarContextProvider>
    </ThemeContextProvider>
  );
};

export default ContextProvider;
