import { Modal } from "@/shared/ui/Modal";
import styles from "./AboutModal.module.css";
import { type FC } from "react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
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
  );
};
