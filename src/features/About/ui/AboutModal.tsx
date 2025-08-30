import { Modal } from "@/shared/ui/Modal";
import { useState } from "react";
import { Button } from "@/shared/ui/Button";
import styles from "./AboutModal.module.css";

export const AboutModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>О проекте</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>О проекте</h2>
        <hr className={styles.modalLine}/>
        <p>Универсального принципа для описания проектов не существует: каждый текст нужно придумывать для конкретной задачи и разных читателей. Например, если вы собираете портфолио, чтобы показать коллегам-архитекторам, в повествовании надо упирать на идеи и архитектурные находки. А если портфолио предназначено для заказчиков — на проблемы, которые решает проект.</p>
      </Modal>
    </>
  );
};
