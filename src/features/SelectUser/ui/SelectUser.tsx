import { Button } from "@/shared/ui/Button";
import styles from "./SelectUser.module.css";
import { type FC } from "react";
import { users } from "@/shared/mocks/users";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SelectUserProps {
  userId?: number;
  path: string
}

export const SelectUser: FC<SelectUserProps> = ({userId, path}) => {
  const [selectedId, setSelectedId] = useState(userId || 1);
  const navigate = useNavigate();

  const userIds = users.map((user) => user.id);

  const handleNavigate = () => {
    navigate(`/users/${selectedId}/${path}`);
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(Number(event.target.value));
  };

  return (
    <div className={styles.selectUser}>
      <p className={styles.selectUserTitle}>Выберите ID пользователя:</p>
      <select id="user-select" value={selectedId} onChange={handleSelect}>
        {userIds.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <Button onClick={() => handleNavigate()} type="button">Применить</Button>
    </div>
  );
};
