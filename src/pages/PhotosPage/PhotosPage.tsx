import styles from "./PhotosPage.module.css";
import type { FC } from "react";
import { PhotoList } from "@/widgets/PhotoList";
import { photos } from "@/shared/mocks/photos";
import { SelectAlbum } from "@/features/SelectAlbum";

export const PhotosPage: FC = () => {
    return (
        <>
        <PhotoList photos={photos}/>
        <SelectAlbum/>
        </>
    )
}