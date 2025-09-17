import styles from "./TodosPage.module.css";
import { type FC } from "react";
import { TodoList } from "@/widgets/TodoList/TodoList";
import { SelectUser } from "@/features/SelectUser";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { useGetTodosByUserIdQuery } from "@/entities/todo";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/app/providers/store";
import { setSelectedUserId } from "@/entities/user";
import { useEffect } from "react";

export const TodosPage: FC = () => {
  const TodoListWithLoading = withLoading(TodoList);
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userId && Number(userId) !== selectedUserId) {
      dispatch(setSelectedUserId(Number(userId)));
    }
  }, []);

  const selectedUserId = useSelector(
    (state: RootState) => state.users.selectedUserId
  );

  const activeUserId = Number(userId || selectedUserId);

  const {
    isFetching,
    data: todos,
    error,
  } = useGetTodosByUserIdQuery(activeUserId);

  const handleSelectUser = (id: number) => dispatch(setSelectedUserId(id));

  return (
    <div className={styles.todosPage}>
      <TodoListWithLoading todos={todos || []} isFetching={isFetching} />
      {!isFetching &&
        (error ? (
          <ErrorMessage />
        ) : (
          <SelectUser
            userId={activeUserId}
            path="todos"
            onSelect={handleSelectUser}
          />
        ))}
    </div>
  );
};
