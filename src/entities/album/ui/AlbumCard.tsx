import type { FC } from "react";
import styles from "./AlbumCard.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface AlbumCardProps {
  title: string;
  id: number;
  userId: number;
}

export const AlbumCard: FC<AlbumCardProps> = ({ title, userId }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
   navigate(`/albums/${id}/photos`);
  };

  return (
    <div onClick={handleNavigate} className={styles.albumCard}>
      <div className={styles.albumCardContent}>
        <h3>{title}</h3>
        <p>ID пользователя: {userId}</p>
      </div>
    </div>
  );
};
