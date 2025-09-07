import { useTheme } from "@/shared/lib/theme";
import { Button } from "@/shared/ui/Button";
import sun from "@/assets/images/header/sun-icon.svg";
import moon from "@/assets/images/header/moon-icon.svg";
import styles from "./ThemeSwitcher.module.css";
import { type FC } from "react";

export const ThemeSwitcher: FC = () => {
  const { toggleDark, isDark } = useTheme();

  return (
    <Button onClick={toggleDark}>
      <img className={styles.icon} src={isDark ? sun : moon} />
    </Button>
  );
};
