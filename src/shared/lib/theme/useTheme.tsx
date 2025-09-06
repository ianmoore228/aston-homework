import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Конекст должен быть использован внутри провайдера");
  return context;
};
