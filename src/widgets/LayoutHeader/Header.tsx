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

    function handleClose () {
      setIsOpen(false);
    };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
      <Button type="button" onClick={handleOpen}>О проекте</Button>
      <AboutModal isOpen={isOpen} onClose={handleClose} />
        <h2 className={styles.headerTitle}>HEADER</h2>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
