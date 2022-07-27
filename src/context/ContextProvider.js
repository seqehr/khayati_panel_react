import { ArticlesContextProvider } from './Articles/ArticlesContext'
import { BooksContextProvider } from './Books/BooksContext'
import { CourseContextProvider } from './Courses/CoursesContext'
import { DashboardContextProvider } from './Dashboard/DashboardContext'
import { LoginContextProvider } from './login/LoginContext'
import { SidebarContextProvider } from './sidebar/SidebarContext'
import { ThemeContextProvider } from './theme/ThemeContext'
import { TokenContextProvider } from './token/TokenContext'
import { UploadContextProvider } from './Upload/UploadContext'

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
                <BooksContextProvider>
                  {/* A R T I C L E S*/}
                  <ArticlesContextProvider>
                    {/* D A S H B O A R D*/}
                    <DashboardContextProvider>
                      {children}
                    </DashboardContextProvider>
                  </ArticlesContextProvider>
                </BooksContextProvider>
              </CourseContextProvider>
            </LoginContextProvider>
          </TokenContextProvider>
        </UploadContextProvider>
      </SidebarContextProvider>
    </ThemeContextProvider>
  )
}

export default ContextProvider
