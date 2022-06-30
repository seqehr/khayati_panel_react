import { Routes, Route } from "react-router-dom";

// Hooks

// Libraries
import Helmet from "react-helmet";

// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";

// CSS
import style from "./App.module.scss";
import AddCourse from "./pages/Courses/AddCourse";

function App() {
  return (
    <>
      <Helmet>
        <title>{`khaiati`}</title>
      </Helmet>

      {/*  */}

      <Header />
      <div className="min-h-screen py-4 bg-background-light dark:bg-background-dark sm:py-8">
        <div className="wrapper">
          <div className="relative flex gap-8">
            <Sidebar />

            <main className={`flex-1`}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/course/add" element={<AddCourse />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
