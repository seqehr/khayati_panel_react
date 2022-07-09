// Context
import { useContext } from "react";
import UploadContext from "../context/Upload/UploadContext";

const useUpload = (props) => {
  const { progress, setProgress } = useContext(UploadContext);

  return {
    progress,
    setProgress,
  };
};

export default useUpload;
