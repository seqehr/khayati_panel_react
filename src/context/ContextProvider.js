import { ArticlesContextProvider } from './Articles/ArticlesContext'
import { BooksContextProvider } from './Books/BooksContext'
import { CategoriesContextProvider } from './Articles/Categories/CategoriesContext'
import { CourseContextProvider } from './Courses/CoursesContext'
import { DashboardContextProvider } from './Dashboard/DashboardContext'
import { LoginContextProvider } from './login/LoginContext'
import { SettingContextProvider } from './Settings/SettingsContext'
import { SidebarContextProvider } from './sidebar/SidebarContext'
import { ThemeContextProvider } from './theme/ThemeContext'
import { TokenContextProvider } from './token/TokenContext'
import { UploadContextProvider } from './Upload/UploadContext'
import { ProductsCategoriesContextProvider } from './Products/Categories/ProductsCategoriesContext'
import { ProductsContextProvider } from './Products/ProductsContext'

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
              {/* P O S T - C A T*/}
              <CategoriesContextProvider>
                {/* P R O D U CT - C A T*/}
                <ProductsCategoriesContextProvider>
                  {/* C O U R S E*/}
                  <CourseContextProvider>
                    {/* B O O K S*/}
                    <BooksContextProvider>
                      {/* A R T I C L E S*/}
                      <ArticlesContextProvider>
                        {/* D A S H B O A R D*/}
                        <DashboardContextProvider>
                          {/* S E T T I N G S */}
                          <SettingContextProvider>
                            {/* P R O D U C T S */}
                            <ProductsContextProvider>
                              {children}
                            </ProductsContextProvider>
                          </SettingContextProvider>
                        </DashboardContextProvider>
                      </ArticlesContextProvider>
                    </BooksContextProvider>
                  </CourseContextProvider>
                </ProductsCategoriesContextProvider>
              </CategoriesContextProvider>
            </LoginContextProvider>
          </TokenContextProvider>
        </UploadContextProvider>
      </SidebarContextProvider>
    </ThemeContextProvider>
  )
}

export default ContextProvider
