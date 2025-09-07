import type { ReactNode } from "react";
import styles from "./Button.module.css";
import type { FC } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
};
