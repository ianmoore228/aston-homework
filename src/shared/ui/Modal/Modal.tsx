import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import styles from "./Modal.module.css";
import { Button } from "@/shared/ui/Button";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    document.body.style.overflow = "unset";
    return null;
  } else {
    document.body.style.overflow = "hidden";
  }

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
      <button className={styles.modalCloseButton} onClick={onClose}>x</button>
      {children}
      </div>
    </div>,
    document.body
  );
};
