import styles from "./TodosPage.module.css";
import { TodoList } from "@/widgets/TodoList/TodoList";
import { SelectUser } from "@/features/SelectUser";
import { withLoading } from "@/shared/lib/hoc/WithLoading";
import { useGetTodosByUserIdQuery } from "@/entities/todo";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/app/providers/store";
import { setSelectedUserId } from "@/entities/user";
import { useEffect } from "react";
import { Button } from "@/shared/ui/Button";
import { useRefreshUserTodosMutation } from "@/entities/todo";

export const TodosPage = () => {
  const TodoListWithLoading = withLoading(TodoList);
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const [refreshTodos] = useRefreshUserTodosMutation();

  const handleRefresh = () => refreshTodos(Number(userId));

  const selectedUserId = useSelector(
    (state: RootState) => state.users.selectedUserId
  );

  useEffect(() => {
    if (userId && Number(userId) !== selectedUserId) {
      dispatch(setSelectedUserId(Number(userId)));
    }
  }, [dispatch, userId, selectedUserId]);

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
          <div className={styles.todosPageContainer}>
          <SelectUser
            userId={activeUserId}
            path="todos"
            onSelect={handleSelectUser}
          />
          <Button type="button" onClick={handleRefresh}>Invalidate</Button>
          </div>
        ))}
    </div>
  );
};
