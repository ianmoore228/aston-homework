import styles from "./header.module.css";
import type { FC } from "react";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>HEADER</h1>
      </div>
    </header>
  );
};
