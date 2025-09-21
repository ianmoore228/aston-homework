import styles from "./PhotoList.module.css";
import type { Photo } from "@/entities/photo";
import { useParams } from "react-router-dom";
import { PhotoCard } from "@/entities/photo";
import { ItemList } from "@/shared/ui/ItemList";
import type { PropsWithChildren } from "react";

interface PhotoListProps {
  photos: Photo[];
}

export const PhotoList = ({ photos }: PropsWithChildren<PhotoListProps>) => {
  const { albumId } = useParams();

  const filteredPhotos = photos.filter(
    (photo) => photo.albumId === Number(albumId)
  );

  return (
    <section className={styles.photoList}>
      <ItemList
        items={filteredPhotos}
        getKey={(photo: Photo) => photo.id}
        renderItem={(photo: Photo) => (
          <PhotoCard
            key={photo.id}
            title={photo.title}
            url={photo.url}
            albumId={photo.albumId}
          />
        )}
      />
    </section>
  );
};
