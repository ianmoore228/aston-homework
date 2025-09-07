import styles from "./header.module.css";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { AboutModal } from "@/features/AboutModal";
import { type FC } from "react";
import { useState } from "react";
import { Button } from "@/shared/ui/Button";

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Button onClick={handleOpen}>О проекте</Button>
        <AboutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <h2 className={styles.headerTitle}>HEADER</h2>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
