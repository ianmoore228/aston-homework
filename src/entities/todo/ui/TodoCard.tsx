import type { PropsWithChildren } from "react";
import styles from "./TodoCard.module.css";

interface TodoCardProps {
    title: string;
    isCompleted: boolean
}

export const TodoCard = ({title, isCompleted}: PropsWithChildren<TodoCardProps>) => {
    return (
        <div className={styles.todoCard}>
        <label className={styles.todoLabel}>
          <input type="checkbox" checked={isCompleted} readOnly />
          <span className={styles.todoTitle}>{title}</span>
        </label>
      </div>
    );
}