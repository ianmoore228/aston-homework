import { PostCard } from "../../entities/post/ui/PostCard";
import "./PostList.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <section className="post-list">
      {posts.map(post => (
        <PostCard key={post.id} userId={post.userId} title={post.title} body={post.body} />
      ))}
    </section>
  );
};
