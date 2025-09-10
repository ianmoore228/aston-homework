// createPortal - функция, которая позволяет рендерить компоненты в другом DOM элементе
import { createPortal } from "react-dom";
import { type ReactNode, createContext, useEffect } from "react";
import styles from "./Modal.module.css";
// Оборачивает компонент, чтобы он перерендеривался если пропсы не изменились
import { memo } from "react";
import { motion } from "framer-motion";
import { type FC } from "react";


interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

// Контекст и дефолтные значения пропсов
const ModalContext = createContext<ModalProps>({
  isOpen: false,
  onClose: () => {},
  children: null,
});

const Modal: FC<ModalProps> = memo(({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ isOpen, onClose, children }}>
      <div className={styles.modal}>
        <motion.div 
           initial={{ y: -30 }}
           animate={{ y: 0 }}
        className={styles.modalContent}>
          <button className={styles.modalCloseButton} onClick={onClose}>
            x
          </button>
          {children}
        </motion.div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
});

// Составной компонент
const Header = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

// Экспорт объекта с составными компонентами
export default {
  Root: Modal,
  Header: Header,
  Body: Body,
  Footer: Footer,
};
