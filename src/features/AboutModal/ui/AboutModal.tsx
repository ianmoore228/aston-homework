import { Modal } from "@/shared/ui/Modal";
import { useState, useCallback } from "react";
import { Button } from "@/shared/ui/Button";
import styles from "./AboutModal.module.css";
import { type FC } from "react";

export const AboutModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  }

  return (
    <>
      <Button type="button" onClick={handleOpen}>О проекте</Button>
      <Modal.Root isOpen={isOpen} onClose={handleClose}>
        <Modal.Header>
          <h2>О проекте</h2>
        </Modal.Header>
        <Modal.Body>
          <hr className={styles.modalLine} />
          <p>
            Универсального принципа для описания проектов не существует: каждый
            текст нужно придумывать для конкретной задачи и разных читателей.
            Например, если вы собираете портфолио, чтобы показать
            коллегам-архитекторам, в повествовании надо упирать на идеи и
            архитектурные находки. А если портфолио предназначено для заказчиков
            — на проблемы, которые решает проект.
          </p>
        </Modal.Body>
      </Modal.Root>
    </>
  );
};
