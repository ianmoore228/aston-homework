import styles from "./Button.module.css";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import type { MouseEventHandler } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, disabled, ...rest }: PropsWithChildren<ButtonProps>) => {
  return <motion.button  whileHover={disabled ? { scale: 1 } : { scale: 1.07 }} className={`${styles.button} ${disabled ? styles.buttonDisabled : ""}`} {...rest}>{children}</motion.button>;
};
