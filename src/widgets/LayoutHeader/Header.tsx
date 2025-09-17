import styles from "./header.module.css";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { AboutModal } from "@/features/AboutModal";
import { type FC } from "react";
import { useState } from "react";
import { Button } from "@/shared/ui/Button";
import { UserTabs } from "@/widgets/UserTabs";

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Button type="button" onClick={handleOpen}>
          О проекте
        </Button>
        <AboutModal isOpen={isOpen} onClose={handleClose} />
        <div className={styles.headerRight}>
        <ThemeSwitcher />
        <UserTabs />
        </div>
      </div>
    </header>
  );
};
