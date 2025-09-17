import { memo } from "react";
import styles from "./Input.module.css";
import { motion } from "framer-motion";
import { type FC } from "react";

interface InputProps {
    id: string;
    type: string;
    placeholder?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    required?: boolean;
    autoComplete?: string;
}

const InputComponent: FC<InputProps> = ({ ...rest }) => {
  return (
    <motion.input
      {...rest}
      whileHover={{ boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.17)" }}
      className={styles.input}
    />
  );
};

export const Input = memo(InputComponent);