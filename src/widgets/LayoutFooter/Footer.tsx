import styles from "./Footer.module.css";
import { type FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <h1 className={styles.footerTitle}>FOOTER</h1>
      </div>
    </footer>
  );
};
