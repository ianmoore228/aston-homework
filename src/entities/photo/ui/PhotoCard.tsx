import type { FC } from "react";
import styles from "./PhotoCard.module.css"
import placeholderImg from "@/assets/images/imgPlaceholder.svg"

type PhotoCardProps = {
    albumId: number;
    title: string;
    url: string;
}

export const PhotoCard: FC<PhotoCardProps> = ({ title, url }) => {
    return (
        <div className={styles.photoCard}>
            <div className={styles.photoContainer}>
            <img className={styles.photo} src={url} alt={title}
            onError={(e) => (e.currentTarget.src = placeholderImg)}
            />
            </div>
            <p className={styles.photoCardTitle}>{title}</p>
        </div>
    )
}