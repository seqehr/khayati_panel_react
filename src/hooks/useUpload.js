// Context
import { useContext } from "react";
import UploadContext from "../context/Upload/Upload";

const useUpload = (props) => {
  const { onDrop, progress, setProgress } = useContext(UploadContext);

  return {
    onDrop,
    progress,
    setProgress,
  };
};

export default useUpload;
