import { memo } from "react";
import styles from "./CommentCard.module.css";
import { type FC } from "react";

export interface CommentCardProps {
  name: string;
  email: string;
  body: string;
  postId: number;
}

const CommentCardComponent: FC<CommentCardProps> = ({ name, email, body }) => {
  return (
    <div className={styles.commentCard}>
      <p className={styles.commentCardName}>{name}</p>
      <p className={styles.commentCardEmail}>{email}</p>
      <hr className={styles.commentCardLine} />
      <p className={styles.commentCardBody}>{body}</p>
    </div>
  );
};

export const CommentCard = memo(CommentCardComponent);
