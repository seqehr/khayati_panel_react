import React, { useCallback, useState } from "react";

const UploadContext = React.createContext();
export const UploadContextProvider = ({ children }) => {
  const [progress, setProgress] = useState("");
  const [files, setFiles] = useState([]);
  return (
    <UploadContext.Provider value={{ progress, setProgress, files, setFiles }}>
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContext;
