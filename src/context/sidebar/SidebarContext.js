import React, { useState } from "react";

const SidebarContext = React.createContext();
export function SidebarContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const [music, setMusic] = useState(false);
  const [members, setMembers] = useState(false);
  const [news, setNews] = useState(false);
  const [articles, setArticles] = useState(false);
  const [courses, setCourses] = useState(false);
  const [transactions, setTransactions] = useState(false);
  const [books, setBooks] = useState(false);
  const [products, setProducts] = useState(false);
  const toggleSidebar = () => {
    setSidebar((currentStatus) => !currentStatus);
  };

  return (
    <SidebarContext.Provider
      value={{
        products,
        setProducts,
        books,
        setBooks,
        sidebar,
        setSidebar,
        toggleSidebar,
        music,
        setMusic,
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
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContext;
