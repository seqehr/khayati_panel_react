// Context
import { useContext } from "react";
import SidebarContext from "../context/sidebar/SidebarContext";

const useSidebar = (props) => {
  const {
    sidebar,
    setSidebar,
    toggleSidebar,
    music,
    setMusic,
    books,
    setBooks,
    members,
    setMembers,
    news,
    setNews,
    articles,
    setArticles,
    courses,
    setCourses,
    transactions,
    setTransactions,
  } = useContext(SidebarContext);

  return {
    sidebar,
    setSidebar,
    toggleSidebar,
    music,
    setMusic,
    books,
    setBooks,
    members,
    setMembers,
    news,
    setNews,
    articles,
    setArticles,
    courses,
    setCourses,
    transactions,
    setTransactions,
  };
};

export default useSidebar;
