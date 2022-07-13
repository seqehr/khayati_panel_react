import React, { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const CourseContext = React.createContext();
export const CourseContextProvider = ({ children }) => {
  const [getLesson, setLesson] = useState([]);
  const [getLinkLesson, setLinkLesson] = useState("");
  const [getTitleLesson, setTitleLesson] = useState("");

  const handleDelete = (id) => {
    const lessons = [...getLesson];
    const index = lessons.findIndex((t) => t.id == id);
    const lesson = lessons[index];
    const filteredTodos = lessons.filter((t) => t.id !== id);
    setLesson(filteredTodos);

    toast.success(`(${lesson.name}) با موفقیت حذف شد`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCreate = () => {
    const lessons = [...getLesson];
    const lesson = {
      id: uuidv4(),
      name: getTitleLesson,
      url: getLinkLesson,
    };
    if (
      getTitleLesson !== "" &&
      getTitleLesson !== " " &&
      getTitleLesson !== null
    ) {
      lessons.push(lesson);
      setLesson(lessons);
      setTitleLesson("");
      setLinkLesson("");
      toast.success(`(${lesson.name}) با موفقیت اضافه شد`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn(`لطفا نام درس را وارد کنید`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const setLessons = (lessonsList) => {
    if (lessonsList == false) {
      setLesson([]);
    } else {
      const lessons = [];
      lessonsList.map((item) => {
        const lesson = {
          id: item.id,
          name: item.name,
          url: item.url,
        };

        lessons.push(lesson);

        setLesson(lessons);
      });
    }
  };
  return (
    <CourseContext.Provider
      value={{
        handleCreate,
        handleDelete,
        getLesson,
        getLinkLesson,
        getTitleLesson,
        setTitleLesson,
        setLinkLesson,
        setLessons,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
