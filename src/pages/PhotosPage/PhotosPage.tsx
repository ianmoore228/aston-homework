import styles from "./PhotosPage.module.css";
import type { FC } from "react";
import { PhotoList } from "@/widgets/PhotoList";
import { SelectAlbum } from "@/features/SelectAlbum";
import { useParams } from "react-router-dom";
import { photos } from "@/shared/mocks/photos";
import { withLoading } from "@/shared/lib/hoc/WithLoading";

export const PhotosPage: FC = () => {
    const PhotoListWithLoading = withLoading(PhotoList);
    const { albumId } = useParams();
  
    const filteredPhotos = photos.filter(
      (photo) => photo.albumId === Number(albumId)
    );
  
    return (
      <div className={styles.photosPage}>
        <PhotoListWithLoading isFetching={false} photos={filteredPhotos} />
        <SelectAlbum albumId={Number(albumId)} />
      </div>
    );
  };
  