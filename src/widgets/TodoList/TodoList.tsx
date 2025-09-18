import styles from "./TodoList.module.css";
import type { FC } from "react";
import { TodoCard } from "@/entities/todo";
import type { Todo } from "@/entities/todo";

interface TodoListProps {
    todos: Todo[]
}

export const TodoList: FC<TodoListProps> = ({todos}) => {

    return (
        <section className={styles.photoList}>
            {todos.map((todo) => (
                <TodoCard key={todo.id} title={todo.title} isCompleted={todo.completed} />
            ))}
        </section>
    )
};
