import styles from "./AlbumsPage.module.css"
import type { FC } from "react"
import { AlbumList } from "@/widgets/AlbumList"
import { albums } from "@/shared/mocks/albums"
import { useParams } from "react-router-dom"
import { SelectUser } from "@/features/SelectUser"
import { withLoading } from "@/shared/lib/hoc/WithLoading"
import { Outlet } from "react-router-dom"

export const AlbumsPage: FC = () => {
    const AlbumsWithLoading = withLoading(AlbumList);
  
    const { userId } = useParams();
  
    const id = Number(userId);
  
    const filteredAlbums = albums.filter(album => album.userId === id);
  
    return (
      <div className={styles.albumsPage}>
        <Outlet />
        <div className={styles.albumsPageContainer}>
          <AlbumsWithLoading isFetching={false} albums={filteredAlbums} />
          <SelectUser userId={id} path="albums" />
        </div>
      </div>
    );
  };
  