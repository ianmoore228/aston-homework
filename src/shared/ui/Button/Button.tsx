import type { ReactNode } from "react";
import styles from "./Button.module.css";
import { motion } from "framer-motion";
import { type FC } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, disabled, ...rest }) => {
  return <motion.button  whileHover={disabled ? { scale: 1 } : { scale: 1.07 }} className={`${styles.button} ${disabled ? styles.buttonDisabled : ""}`} {...rest}>{children}</motion.button>;
};
