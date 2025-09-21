import { useState, useMemo } from "react";
import type { PropsWithChildren } from "react";
import styles from "./CommentList.module.css";
import { CommentCard } from "@/entities/comment";
import type { Comment } from "@/entities/comment";
import arrowBlack from "@/assets/images/arrow-black.svg";
import arrowWhite from "@/assets/images/arrow-white.svg";
import { useTheme } from "@/shared/lib/theme";
import { useGetCommentByPostIdQuery } from "@/entities/comment";
import { ItemList } from "@/shared/ui/ItemList";

export type CommentListProps = {
  postId: number;
};

export const CommentList = ({ postId }: PropsWithChildren<CommentListProps>) => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const { isDark } = useTheme();

  const { data: comments, isFetching } = useGetCommentByPostIdQuery(postId, {
    skip: !isUnfolded,
  });

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
       <ItemList
        items={visibleComments}
        getKey={(comment: Comment) => comment.id}
        renderItem={(comment: Comment) => (
          <CommentCard
            key={comment.id}
            postId={postId}         
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        )}
      />
      <button className={styles.commentListButton} onClick={toggleComments}>
        {isUnfolded ? "Свернуть" : "Развернуть комментарии"}
        <img
          className={styles.commentListButtonArrow}
          style={{ transform: isUnfolded ? "rotate(180deg)" : "unset" }}
          src={isDark ? arrowWhite : arrowBlack}
        />
      </button>
      {isFetching && <div className={styles.commentListLoading}></div>}
    </div>
  );
};