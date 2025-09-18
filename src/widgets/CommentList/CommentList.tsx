import styles from "./CommentList.module.css";
import { CommentCard } from "@/entities/comment";
import type { Comment } from "@/entities/comment";
import arrowBlack from "@/assets/images/arrow-black.svg"
import arrowWhite from "@/assets/images/arrow-white.svg"
import { useTheme } from "@/shared/lib/theme";
import { useState, useMemo } from "react";
import { type FC } from "react";

export type CommentListProps = {
  comments: Comment[];
  postId: number;
};

export const CommentList: FC<CommentListProps> = ({ comments, postId }) => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const { isDark } = useTheme();

  const toggleComments = () => {
    setIsUnfolded((prev) => !prev);
  };

  const commentsById = useMemo(
    () => comments ?? [],
    [comments]
  );

  const visibleComments = isUnfolded ? commentsById : [];

  return (
    <div className={styles.commentList}>
      {visibleComments.map((comment: Comment) => (
        <CommentCard
          postId={postId}
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
      <button className={styles.commentListButton} onClick={toggleComments}>
        {isUnfolded ? "Свернуть" : "Развернуть комментарии"}
        <img
          className={styles.commentListButtonArrow}
          style={{ transform: isUnfolded ? "rotate(180deg)" : "unset" }}
          src={isDark ? arrowWhite : arrowBlack}
        />
      </button>
    </div>
  );
};
