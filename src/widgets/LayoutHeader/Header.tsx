import styles from "./header.module.css";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { AboutModal } from "@/features/AboutModal";
import { type FC } from "react";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <AboutModal/>
        <h2 className={styles.headerTitle}>HEADER</h2>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
