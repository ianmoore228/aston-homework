import { Button } from "@/shared/ui/Button";
import styles from "./SelectUser.module.css";
import { type FC } from "react";
// import { users } from "@/shared/mocks/users";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetAllUsersQuery } from "@/entities/user";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/providers/store";

interface SelectUserProps {
  userId?: number;
  path: string;
  onSelect: (id: number) => void;
}

export const SelectUser: FC<SelectUserProps> = ({ path, onSelect }) => {
  const { data: users } = useGetAllUsersQuery();
  const selectedUserId = useSelector((state: RootState) => state.users.selectedUserId);
  const [selectedId, setSelectedId] = useState(selectedUserId);
  const navigate = useNavigate();

  const userIds = users?.map((user) => user.id);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(event.target.value);
    setSelectedId(id);
  };

  const handleNavigate = () => {
    onSelect(selectedId); 
    navigate(`/users/${selectedId}/${path}`);
  };

  return (
    <div className={styles.selectUser}>
      <p className={styles.selectUserTitle}>Выберите ID пользователя:</p>
      <select id="user-select" value={selectedId} onChange={handleSelect}>
        {userIds?.map((id) => (
          <option key={id} value={id}>{id}</option>
        ))}
      </select>
      <Button onClick={handleNavigate} type="button">Применить</Button>
    </div>
  );
};
