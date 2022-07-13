// Context
import { useContext } from "react";
import CoursesContext from "../context/Courses/CoursesContext";

const useCourses = (props) => {
  const {
    handleCreate,
    handleDelete,
    getLesson,
    getLinkLesson,
    getTitleLesson,
    setLinkLesson,
    setLessons,
    setTitleLesson,
  } = useContext(CoursesContext);

  return {
    handleCreate,
    handleDelete,
    getLesson,
    setLessons,
    getLinkLesson,
    getTitleLesson,
    setLinkLesson,
    setTitleLesson,
  };
};

export default useCourses;
