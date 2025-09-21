import styles from "./TodoList.module.css";
import type { PropsWithChildren } from "react";
import { TodoCard } from "@/entities/todo";
import type { Todo } from "@/entities/todo";
import { ItemList } from "@/shared/ui/ItemList";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: PropsWithChildren<TodoListProps>) => {
  return (
    <section className={styles.todoList}>
      <ItemList
        items={todos}
        getKey={(todo: Todo) => todo.id}
        renderItem={(todo: Todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            isCompleted={todo.completed}
          />
        )}
      />
    </section>
  );
};
