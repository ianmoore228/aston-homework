import type { FC } from "react";
import styles from "./PhotoCard.module.css"

type PhotoCardProps = {
    albumId: number;
    title: string;
    url: string;
}

export const PhotoCard: FC<PhotoCardProps> = ({ albumId, title, url }) => {
    return (
        <div className={styles.photoCard}>
            <div className={styles.photoContainer}>
            <img className={styles.photo} src={url} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    )
}