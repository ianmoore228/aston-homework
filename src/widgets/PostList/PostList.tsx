import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import type { FC } from "react";
import { type Post } from "../../entities/post";

interface PostListProps {
  posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <section className={styles.postList}>
      {posts.map(post => (
        <PostCard key={post.id} userId={post.userId} title={post.title} body={post.body} />
      ))}
    </section>
  );
};
