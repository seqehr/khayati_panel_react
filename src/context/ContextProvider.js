import { BooksContextProvider } from "./Books/BooksContext";
import { CourseContextProvider } from "./Courses/CoursesContext";
import { LoginContextProvider } from "./login/LoginContext";
import { SidebarContextProvider } from "./sidebar/SidebarContext";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { TokenContextProvider } from "./token/TokenContext";
import { UploadContextProvider } from "./Upload/UploadContext";

const ContextProvider = ({ children }) => {
  return (
    // T H E M E
    <ThemeContextProvider>
      {/* S I D E B A R */}
      <SidebarContextProvider>
        {/* U P L O A D*/}
        <UploadContextProvider>
          {/* T O K E N*/}
          <TokenContextProvider>
            {/* L O G I N*/}
            <LoginContextProvider>
              {/* C O U R S E*/}
              <CourseContextProvider>
                {/* B O O K S*/}
                <BooksContextProvider>{children}</BooksContextProvider>
              </CourseContextProvider>
            </LoginContextProvider>
          </TokenContextProvider>
        </UploadContextProvider>
      </SidebarContextProvider>
    </ThemeContextProvider>
  );
};

export default ContextProvider;
