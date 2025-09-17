import type { FC } from "react";
import { PhotoList } from "@/widgets/PhotoList";
import { SelectAlbum } from "@/features/SelectAlbum";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { useGetPhotosByAlbumIdQuery } from "@/entities/photo";
import { useParams } from "react-router-dom";
import styles from "./PhotosPage.module.css";

export const PhotosPage: FC = () => {
  const { albumId } = useParams();
  const PhotoListWithLoading = withLoading(PhotoList);
  const {
    data: photos,
    isFetching,
    error,
  } = useGetPhotosByAlbumIdQuery(Number(albumId));

  return (
    <div className={styles.photosPage}>
      <PhotoListWithLoading photos={photos || []} isFetching={isFetching} />
      {!isFetching &&
        (error ? <ErrorMessage /> : <SelectAlbum albumId={Number(albumId)} />)}
    </div>
  );
};
