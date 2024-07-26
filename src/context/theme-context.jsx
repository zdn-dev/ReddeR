import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {

  const [isdarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prewState) => !prewState);
  };

  const theme = isdarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isdarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
