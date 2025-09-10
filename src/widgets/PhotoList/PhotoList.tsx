import type { FC } from "react";
import styles from "./PhotoList.module.css"
import type { Photo } from "@/entities/photo";
import { useParams } from "react-router-dom";
import { PhotoCard } from "@/entities/photo/ui/PhotoCard";

interface PhotoListProps {
    photos: Photo[]
}

export const PhotoList: FC<PhotoListProps> = ({photos}) => {

    const { id: albumId } = useParams();

    const filteredPhotos = photos.filter((photo) => photo.albumId === Number(albumId));

    return (
        <section className={styles.photoList}>
            {filteredPhotos.map((photo) => (
                <PhotoCard key={photo.id} title={photo.title} url={photo.url} albumId={photo.albumId} />
            ))}
        </section>
    )
}