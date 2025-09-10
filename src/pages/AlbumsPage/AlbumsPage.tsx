import styles from "./AlbumsPage.module.css"
import type { FC } from "react"
import { AlbumList } from "@/widgets/AlbumList"
import { albums } from "@/shared/mocks/albums"
import { useParams } from "react-router-dom"
import { SelectUser } from "@/features/SelectUser"

export const AlbumsPage: FC = () => {

    const { id } = useParams();

    return (
        <>
        <AlbumList albums={albums} />
        <SelectUser userId={Number(id)} path="albums" />
        </>
    )
}