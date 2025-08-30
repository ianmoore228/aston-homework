import { PostCard } from "@/entities/post";
import styles from "./PostList.module.css";
import type { Post } from "@/entities/post";
import React from "react";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <section className={styles.postList}>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        </React.Fragment>
      ))}
    </section>
  );
};
