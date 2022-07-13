// Context
import { useContext } from "react";
import TokenContext from "../context/token/TokenContext";

const useToken = (props) => {
  const { token, setToken } = useContext(TokenContext);
  return { token, setToken };
};

export default useToken;
