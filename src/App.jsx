import { Routes, Route } from 'react-router-dom'

// Hooks

// Libraries
import Helmet from 'react-helmet'

// Pages
import Dashboard from './pages/Dashboard/Dashboard'

// CSS
import style from './App.module.scss'
import 'react-toastify/dist/ReactToastify.css'
// Components
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AddCourse from './pages/Courses/AddCourse'
import Uploads from './pages/Uploads/Uploads'
import { ToastContainer } from 'react-toastify'
import ListCourses from './pages/Courses/ListCourses'
import ListMusics from './pages/Music/ListMusics'
import ListMembers from './pages/Members/ListMembers'

import ListTransactions from './pages/Transactions/ListTransactions'
import ListArticles from './pages/Articles/ListArticles'
import AddArticle from './pages/Articles/AddArticle'
import AddMusic from './pages/Music/AddMusic'
import Settings from './pages/Settings/Settings'
import ListBooks from './pages/Books/ListBooks'
import AddBook from './pages/Books/AddBook'
import Login from './pages/Auth/Login'
import useToken from './hooks/useToken'
import UpdateCourse from './pages/Courses/UpdateCourse'
import UpdateArticle from './pages/Articles/UpdateArticle'
import UpdateBook from './pages/Books/UpdateBook'
import { useEffect } from 'react'
import { ChekLoginUser } from './services/UserService'
import ListProducts from './pages/Products/ListProducts'
import AddProduct from './pages/Products/AddProduct'
import UpdateProduct from './pages/Products/UpdateProduct'
import UpdateMusic from './pages/Music/UpdateMusic'
import MemberListCourses from './pages/Members/MemberListCourses'
import ListTags from './pages/Articles/Tags/ListTags'
import AddMember from './pages/Members/AddMember'
function App() {
  const { token, setToken } = useToken()

  useEffect(() => {
    ChekLoginUser(token)
      .then((res) => {})
      .catch((err) => {
        if (err.response.status == 401) {
          const myToken = window.localStorage.getItem('Khayati-token')
          if (myToken != null) {
            window.localStorage.removeItem('Khayati-token')
            setToken(false)
          }
        }
      })
  }, [])

  return (
    <>
      <Helmet>
        <title>{`khaiati`}</title>
      </Helmet>
      <ToastContainer />
      {/*  */}
      {!token ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className='min-h-screen py-4 bg-background-light dark:bg-background-dark sm:py-8'>
            <div className='wrapper'>
              <div className='relative flex gap-8'>
                <Sidebar />

                <main className={`flex-1`}>
                  <Routes>
                    <Route path='/' element={<Dashboard />} />
                    // Courses
                    <Route path='/course/add' element={<AddCourse />} />
                    <Route path='/courses' element={<ListCourses />} />
                    <Route
                      path='/course/update/:id'
                      element={<UpdateCourse />}
                    />
                    // Musics
                    <Route path='/musics' element={<ListMusics />} />
                    <Route path='/music/add' element={<AddMusic />} />
                    <Route path='/music/update/:id' element={<UpdateMusic />} />
                    // Articles
                    <Route path='/articles' element={<ListArticles />} />
                    <Route path='/article/add' element={<AddArticle />} />
                    <Route
                      path='/article/update/:id'
                      element={<UpdateArticle />}
                    />
                    <Route path='/tags' element={<ListTags />} />
                    // Products
                    <Route path='/products' element={<ListProducts />} />
                    <Route path='/product/add' element={<AddProduct />} />
                    <Route
                      path='/product/update/:id'
                      element={<UpdateProduct />}
                    />
                    // Books
                    <Route path='/books' element={<ListBooks />} />
                    <Route path='/book/add' element={<AddBook />} />
                    <Route path='/book/update/:id' element={<UpdateBook />} />
                    <Route
                      path='/transactions'
                      element={<ListTransactions />}
                    />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/uploads' element={<Uploads />} />
                    // users
                    <Route path='/member/add' element={<AddMember />} />
                    <Route path='/members' element={<ListMembers />} />
                    <Route
                      path='/courses/member/:id'
                      element={<MemberListCourses />}
                    />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default App
