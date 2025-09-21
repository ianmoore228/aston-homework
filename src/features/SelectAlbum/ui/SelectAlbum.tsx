import { Button } from "@/shared/ui/Button";
import styles from "./SelectAlbum.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetAllAlbumsQuery } from "@/entities/album";
import { useParams } from "react-router-dom";
import type { PropsWithChildren } from "react";

interface SelectAlbumProps {
  albumId?: number;
}

export const SelectAlbum = ({albumId}: PropsWithChildren<SelectAlbumProps>) => {

  const { userId } = useParams();

  const { data: albums } = useGetAllAlbumsQuery();
  const [selectedId, setSelectedId] = useState(albumId || 1);
  const navigate = useNavigate();

  const albumIds = albums?.map((albums) => albums.id);

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
        {albumIds?.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <Button onClick={() => handleNavigate()} type="button">Применить</Button>
    </div>
  );
};
