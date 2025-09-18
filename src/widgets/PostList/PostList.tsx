import { PostCard } from "@/entities/post";
import styles from "./PostList.module.css";
import type { Post } from "@/entities/post";
import { CommentList } from "../CommentList";
import { comments } from "@/shared/mocks/comments";
import { type FC } from "react";

export interface PostListProps {
  posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {

  const getCommentsByPostId = (postId: number) => {
    return comments.filter((comment) => comment.postId === postId);
  };

    return (
      <section className={styles.postList}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className={styles.postListContent} key={post.id}>
              <PostCard
                id={post.id}
                key={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
              <CommentList postId={post.id} comments={getCommentsByPostId(post.id)} />
            </div>
          ))
        ) : (
          <h3>Нету постов</h3>
        )}
      </section>
    );
  }; 