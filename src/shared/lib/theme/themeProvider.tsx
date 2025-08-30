import { useState, createContext, useEffect } from "react";
import type { ReactNode } from "react";

export const ThemeContext = createContext({
    isDark: false,
    toggleDark: () => {},
  });

  interface ThemeProviderProps {
    children: ReactNode
  } 

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setDark] = useState(false);
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            isDark ? "dark" : "light"
          );
    }, [isDark]);
    const toggleDark = () => setDark(!isDark);
    return <ThemeContext.Provider value={{ isDark, toggleDark }}>{children}</ThemeContext.Provider>;
};