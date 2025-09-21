import styles from "./PostCard.module.css";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import type { PropsWithChildren } from "react";

interface PostCardProps {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export const PostCardComponent = (({ title, body, userId, id }: PropsWithChildren<PostCardProps>) => {
  const navigate = useNavigate();
  const isSingle = location.pathname === `/post/${id}`; 

const handleNavigate = (id: number) => {
  if (isSingle) return;
  navigate(`/post/${id}`);
};

  return (
    <div className={styles.postCard}>
      <div className={styles.postCardHeader}>
        <p className={styles.postCardUserId}>ID пользователя: {userId}</p>
        <h2 onClick={() => handleNavigate(id)} className={`${styles.postCardTitle} ${isSingle ? styles.postCardTitleDisabled : ""}`}>{title}</h2>
      </div>
      <hr />
      <p className={styles.postCardBody}>{body}</p>
    </div>
  );
});

export const PostCard = memo(PostCardComponent);