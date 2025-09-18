import { createPortal } from "react-dom";
import { type ReactNode, useEffect } from "react";
import styles from "./Modal.module.css";
import { motion } from "framer-motion";
import { type FC } from "react";
import { ModalContext } from "./ModalContext";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalComponent extends FC<ModalProps> {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

const ModalRoot: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => onClose();

  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ isOpen, onClose, children }}>
      <div className={styles.modal}>
        <motion.div 
           initial={{ y: -30 }}
           animate={{ y: 0 }}
        className={styles.modalContent}>
          <button className={styles.modalCloseButton} onClick={handleClose}>
            x
          </button>
          {children}
        </motion.div>
      </div>
    </ModalContext.Provider>,
    document.body
  )
};

const Modal = ModalRoot as ModalComponent;

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };