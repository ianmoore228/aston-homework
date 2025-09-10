import styles from "./PostPage.module.css";
import { PostCard } from "@/entities/post";
import type { FC } from "react";
import { posts } from "@/shared/mocks/posts";
import { useParams } from "react-router-dom";
import { CommentList } from "@/widgets/CommentList";
import { comments } from "@/shared/mocks/comments";

export const PostPage: FC = () => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === Number(id));
 
    if (!post) {
        return <h2>Неправильный ID или пост не найден........</h2>;
    }

    return (
        <div className={styles.postPage}>
           <div className={styles.postPageContent} key={post.id}>
              <PostCard
                id={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
              <CommentList postId={post.id} comments={comments} />
            </div>
        </div>
    );
};