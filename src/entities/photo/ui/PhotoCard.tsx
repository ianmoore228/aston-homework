import styles from "./PhotoCard.module.css"
import placeholderImg from "@/assets/images/imgPlaceholder.svg"
import type { PropsWithChildren } from "react";

type PhotoCardProps = {
    albumId: number;
    title: string;
    url: string;
}

export const PhotoCard = ({ title, url }: PropsWithChildren<PhotoCardProps>) => {
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