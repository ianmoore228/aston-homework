import { PostCard } from "@/entities/post";
import styles from "./PostList.module.css";
import type { Post } from "@/entities/post";
import { CommentList } from "../CommentList";
import type { PropsWithChildren } from "react";
import { ItemList } from "@/shared/ui/ItemList";

export interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PropsWithChildren<PostListProps>) => {
  return (
    <section className={styles.postList}>
      {posts.length > 0 ? (
        <ItemList
          items={posts}
          getKey={(post) => post.id}
          renderItem={(post) => (
            <div key={post.id} className={styles.postListContent}>
              <PostCard
                id={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
              <CommentList postId={post.id} />
            </div>
          )}
        />
      ) : (
        <h3>Нет постов</h3>
      )}
    </section>
  );
};