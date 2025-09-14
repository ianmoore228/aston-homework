import styles from "./TodosPage.module.css";
import { type FC } from "react";
import { TodoList } from "@/widgets/TodoList/TodoList";
import { SelectUser } from "@/features/SelectUser";
import { todos } from "@/shared/mocks/todos";

export const TodosPage: FC = () => {
    return (
        <div className={styles.todosPage}>
            <TodoList todos={todos}/>
            <SelectUser path="todos"/>
        </div>
    )
}