
import styles from "./TodoCard.module.css";
import type { FC } from "react";

interface TodoCardProps {
    title: string;
    isCompleted: boolean
}

export const TodoCard: FC<TodoCardProps> = ({title, isCompleted}) => {
    return (
        <div className={styles.todoCard}>
        <label className={styles.todoLabel}>
          <input type="checkbox" checked={isCompleted} readOnly />
          <span className={styles.todoTitle}>{title}</span>
        </label>
      </div>
    );
}