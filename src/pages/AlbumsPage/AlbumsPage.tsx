import { AlbumList } from "@/widgets/AlbumList";
import { useParams } from "react-router-dom";
import { SelectUser } from "@/features/SelectUser";
import { useGetAlbumsByUserIdQuery } from "@/entities/album";
import { withLoading } from "@/shared/lib/hoc/WithLoading";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { Outlet } from "react-router-dom";
import styles from "./AlbumsPage.module.css";
import type { RootState, AppDispatch } from "@/app/providers/store";
import { setSelectedUserId } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "@/shared/ui/Button";
import { useRefreshUserAlbumsMutation } from "@/entities/album";

export const AlbumsPage = () => {
  const AlbumsWithLoading = withLoading(AlbumList);
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const selectedUserId = useSelector((state: RootState) => state.users.selectedUserId);
  
  useEffect(() => {
    if (userId && Number(userId) !== selectedUserId) {
      dispatch(setSelectedUserId(Number(userId)));
    }
  }, [dispatch, userId, selectedUserId]);

  const activeUserId = Number(userId || selectedUserId);

  const { data: albums, error, isFetching } = useGetAlbumsByUserIdQuery(activeUserId);
  const [refreshAlbums] = useRefreshUserAlbumsMutation();

  const handleSelectUser = (id: number) => dispatch(setSelectedUserId(id));

  const handleRefresh = () => refreshAlbums(activeUserId);


  console.log(activeUserId);

  return (
    <div className={styles.albumsPage}>
      <Outlet />
      <div className={styles.albumsPageContainer}>
        <AlbumsWithLoading isFetching={isFetching} albums={albums || []} />
        {!isFetching &&
          (error ? (
            <ErrorMessage />
          ) : (
            <>
            <SelectUser
              userId={activeUserId}
              path="albums"
              onSelect={handleSelectUser}
            />
            <Button onClick={handleRefresh} type="button">Invalidate</Button>
            </>
          ))}
      </div>
    </div>
  );
};
