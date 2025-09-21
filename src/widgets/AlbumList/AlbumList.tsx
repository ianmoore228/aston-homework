import type { Album } from "@/entities/album";
import { AlbumCard } from "@/entities/album";
import type { PropsWithChildren } from "react";
import styles from "./AlbumList.module.css";
import { ItemList } from "@/shared/ui/ItemList";

interface AlbumListProps {
  albums: Album[];
}

export const AlbumList = ({ albums }: PropsWithChildren<AlbumListProps>) => {
  return (
    <section className={styles.albumList}>
      <ItemList
        items={albums}
        getKey={(album: Album) => album.id}
        renderItem={(album: Album) => (
          <AlbumCard key={album.id} title={album.title} albumId={album.id} />
        )}
      />
    </section>
  );
};