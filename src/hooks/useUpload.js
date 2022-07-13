// Context
import { useContext } from "react";
import UploadContext from "../context/Upload/UploadContext";

const useUpload = (props) => {
  const { progress, setProgress, files, setFiles } = useContext(UploadContext);

  return {
    progress,
    setProgress,
    files,
    setFiles,
  };
};

export default useUpload;
