import React, { useCallback, useState } from "react";

const UploadContext = React.createContext();
export const UploadContextProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  return (
    <UploadContext.Provider value={{ progress, setProgress }}>
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContext;
