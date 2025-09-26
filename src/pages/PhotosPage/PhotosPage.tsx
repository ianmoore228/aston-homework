import type { FC } from "react";
import { PhotoList } from "@/widgets/PhotoList";
import { SelectAlbum } from "@/features/SelectAlbum";
import { withLoading } from "@/shared/lib/hoc/WithLoading";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { useGetPhotosByAlbumIdQuery } from "@/entities/photo";
import { useParams } from "react-router-dom";
import styles from "./PhotosPage.module.css";
import { useRefreshUserPhotosMutation } from "@/entities/photo";
import { Button } from "@/shared/ui/Button";

export const PhotosPage: FC = () => {
  const { albumId } = useParams();
  const PhotoListWithLoading = withLoading(PhotoList);
  const {
    data: photos,
    isFetching,
    error,
  } = useGetPhotosByAlbumIdQuery(Number(albumId));

  const [refreshUserPhotos] = useRefreshUserPhotosMutation();

  const handleRefresh = () => refreshUserPhotos(Number(albumId));

  return (
    <div className={styles.photosPage}>
      <PhotoListWithLoading photos={photos || []} isFetching={isFetching} />
      {!isFetching &&
        (error ? <ErrorMessage /> : <><SelectAlbum albumId={Number(albumId)} />
        <Button type="button" onClick={handleRefresh}>Invalidate</Button>
        </>)}
    </div>
  );
};
