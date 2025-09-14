import type { Album } from "@/entities/album";
import { AlbumCard } from "@/entities/album/ui/AlbumCard";
import type { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./AlbumList.module.css";

interface AlbumListProps {
    albums: Album[];
}

export const AlbumList: FC<AlbumListProps> = ({ albums }) => {
    const { id } = useParams();

    const filteredAlbums = albums.filter((album) => album.userId === Number(id));

    return (
        <section className={styles.albumList}>
            {filteredAlbums.map((album) => (
                <AlbumCard key={album.id} title={album.title} id={album.id} userId={album.userId} />
            ))}
        </section>
    );
}