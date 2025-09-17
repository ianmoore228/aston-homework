import type { FC } from "react";
import styles from "./AlbumCard.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface AlbumCardProps {
  title: string;
  albumId: number;
}

export const AlbumCard: FC<AlbumCardProps> = ({ title, albumId }) => {
  const { userId } = useParams();

  const navigate = useNavigate();

  const handleNavigate = () => {
   navigate(`/users/${userId}/albums/${albumId}/photos`);
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
