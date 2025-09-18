import type { FC } from "react";
import styles from "./PhotoList.module.css"
import type { Photo } from "@/entities/photo";
import { PhotoCard } from "@/entities/photo";

interface PhotoListProps {
    photos: Photo[]
}

export const PhotoList: FC<PhotoListProps> = ({photos}) => {

    return (
        <section className={styles.photoList}>
            {photos.map((photo) => (
                <PhotoCard key={photo.id} title={photo.title} url={photo.url} albumId={photo.albumId} />
            ))}
        </section>
    )
}