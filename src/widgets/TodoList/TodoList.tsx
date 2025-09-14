import styles from "./TodoList.module.css";
import type { FC } from "react";
import { TodoCard } from "@/entities/todo";
import type { Todo } from "@/entities/todo";
import { useParams } from "react-router-dom";

interface TodoListProps {
    todos: Todo[]
}

export const TodoList: FC<TodoListProps> = ({todos}) => {

    const { id: userId } = useParams();

    const filteredTodos = todos.filter((todo) => todo.userId === Number(userId));

    return (
        <section className={styles.photoList}>
            {filteredTodos.map((todo) => (
                <TodoCard key={todo.id} title={todo.title} isCompleted={todo.completed} />
            ))}
        </section>
    )
};
