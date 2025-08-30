import styles from "./header.module.css";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { AboutModalButton } from "@/features/About";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <AboutModalButton/>
        <h2 className={styles.headerTitle}>HEADER</h2>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
