import type { Album } from "@/entities/album";
import { AlbumCard } from "@/entities/album";
import type { FC } from "react";
import styles from "./AlbumList.module.css";

interface AlbumListProps {
    albums: Album[];
}

export const AlbumList: FC<AlbumListProps> = ({ albums }) => {

    return (
        <section className={styles.albumList}>
            {albums.map((album) => (
                <AlbumCard key={album.id} title={album.title} albumId={album.id} />
            ))}
        </section>
    );
}