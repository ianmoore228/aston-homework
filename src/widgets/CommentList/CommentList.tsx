import styles from "./CommentList.module.css";
import { CommentCard } from "@/entities/comment/ui/CommentCard";
import type { Comment } from "@/entities/comment";
import arrowBlack from "@/assets/images/arrow-black.svg"
import arrowWhite from "@/assets/images/arrow-white.svg"
import { useTheme } from "@/shared/lib/theme";
import { useState, useCallback, useMemo } from "react";
import { type FC } from "react";

export type CommentListProps = {
  comments: Comment[];
  postId: number;
};

export const CommentList: FC<CommentListProps> = ({ comments, postId }) => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const { isDark } = useTheme();

  const commentsById = useMemo(() => (comments.filter((comment) => comment.postId === postId)), [comments, postId]);

  const visibleComments =
    commentsById.length <= 3 || isUnfolded
      ? commentsById
      : commentsById.slice(0, 3);

      const toggleComments = useCallback(() => {
        setIsUnfolded((prev) => !prev);
      }, []);

  return (
    <div className={styles.commentList}>
      <p className={styles.commentListTitle}>Комментарии:</p>
      {visibleComments.map((comment: Comment) => (
        <CommentCard
          postId={postId}
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
      {commentsById.length > 3 && (
        <button className={styles.commentListButton} onClick={toggleComments}>
          {isUnfolded ? "Свернуть" : "Развернуть"}
          <img className={styles.commentListButtonArrow} style={{transform: isUnfolded ? "rotate(180deg)" : "unset"}} src={isDark ? arrowWhite : arrowBlack}/>
        </button>
      )}
    </div>
  );
};
