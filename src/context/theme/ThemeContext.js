import React, { useState, useEffect } from "react";

const localStorageKeysPrefix = process.env.REACT_APP_LOCAL_STORAGE_KEYS_PREFIX || ""; // LocalStorage Keys Prefix
const localStorageThemeKey = process.env.REACT_APP_LOCAL_STORAGE_THEME_KEY; // Theme key in localStorage
const themeKey = `${localStorageKeysPrefix}${localStorageThemeKey}`; // Prefix + Theme Key

const initialState = window.localStorage.getItem(themeKey) || "light";

const ThemeContext = React.createContext();
export function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState(initialState);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		const htmlElement = window.document.documentElement;

		// Clean previouse classes
		htmlElement.classList.remove("light");
		htmlElement.classList.remove("dark");

		// Set Theme in localStorage
		window.localStorage.setItem(themeKey, theme);

		// Add theme class to 'html' element
		htmlElement.classList.add(theme);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
