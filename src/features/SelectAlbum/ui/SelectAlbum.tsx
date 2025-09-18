import { Button } from "@/shared/ui/Button";
import styles from "./SelectAlbum.module.css";
import { type FC } from "react";
import { albums } from "@/shared/mocks/albums";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface SelectAlbumProps {
  albumId?: number;
}

export const SelectAlbum: FC<SelectAlbumProps> = ({albumId}) => {
  const [selectedId, setSelectedId] = useState(albumId || 1);
  const navigate = useNavigate();

  const { userId } = useParams();

  const albumIds = albums.map((albums) => albums.id);

  const handleNavigate = () => {
    navigate(`/users/${userId}/albums/${selectedId}/photos`);
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(Number(event.target.value));
  };

  return (
    <div className={styles.selectAlbum}>
      <p className={styles.selectAlbumTitle}>Выберите ID альбома:</p>
      <select id="album-select" value={selectedId} onChange={handleSelect}>
        {albumIds.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <Button onClick={() => handleNavigate()} type="button">Применить</Button>
    </div>
  );
};
