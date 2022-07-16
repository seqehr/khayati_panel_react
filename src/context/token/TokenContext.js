import React, { useEffect, useState } from "react";
import { ChekLoginUser } from "../../services/UserService";

const localStorageKeysPrefix =
  process.env.REACT_APP_LOCAL_STORAGE_KEYS_PREFIX || ""; // LocalStorage Keys Prefix
const localStorageTokenKey = process.env.REACT_APP_LOCAL_STORAGE_TOKEN_KEY; // Token key in localStorage
const tokenKey = `${localStorageKeysPrefix}${localStorageTokenKey}`; // Prefix + Token key

const initialState = window.localStorage.getItem(tokenKey) || false;

const TokenContext = React.createContext();
export function TokenContextProvider({ children }) {
  const [token, setToken] = useState(initialState);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem(tokenKey, token);
    } else {
      // Remove `token` from LocalStorage when it sets to `false` or `falsy` values.
      window.localStorage.removeItem(tokenKey);
    }
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContext;
