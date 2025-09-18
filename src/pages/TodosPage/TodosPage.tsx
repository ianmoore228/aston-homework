import styles from "./TodosPage.module.css";
import { type FC } from "react";
import { TodoList } from "@/widgets/TodoList/TodoList";
import { SelectUser } from "@/features/SelectUser";
import { todos } from "@/shared/mocks/todos";
import { useParams } from "react-router-dom";
import { withLoading } from "@/shared/lib/hoc/WithLoading";

export const TodosPage: FC = () => {
  const { userId } = useParams();
  const id = Number(userId);

  const TodoListWithLoading = withLoading(TodoList);

  const filteredTodos = todos.filter(todo => todo.userId === id);

  return (
    <div className={styles.todosPage}>
      <TodoListWithLoading isFetching={false} todos={filteredTodos} />
      <SelectUser path="todos" userId={id} />
    </div>
  );
};
