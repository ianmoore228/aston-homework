import styles from "./PostCard.module.css";
import { memo } from "react";
import { type FC } from "react";

interface PostCardProps {
  title: string;
  body: string;
  userId: number;
}

export const PostCardComponent: FC<PostCardProps> = (({ title, body, userId }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postCardHeader}>
        <p className={styles.postCardUserId}>ID пользователя: {userId}</p>
        <h2 className={styles.postCardTitle}>{title}</h2>
      </div>
      <hr />
      <p className={styles.postCardBody}>{body}</p>
    </div>
  );
});

export const PostCard = memo(PostCardComponent);