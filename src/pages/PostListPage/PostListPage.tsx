import { PostList } from "@/widgets/PostList/PostList";
import { WithLoading } from "@/shared/lib/hoc/WithLoading";
import { PostLengthFilter } from "@/features/PostLengthFilter";
import styles from "./PostListPage.module.css";
import { SelectUser } from "@/features/SelectUser";
import { useParams } from "react-router-dom";
import type { FC } from "react";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";

const PostWithLoading = WithLoading(PostList);

export const PostListPage: FC = () => {

  const { posts, isLoading, setFilteredPosts } = usePosts();

  const { id } = useParams();

  return (
    <div className={styles.postListPage}>
      <PostWithLoading posts={posts} isLoading={isLoading} />
      {!isLoading && (
        <div className={styles.filters}>
          <PostLengthFilter userId={Number(id)} posts={posts} onFilter={setFilteredPosts} />
          <SelectUser userId={Number(id)} path="posts"/>
        </div>
      )}
    </div>
  );
};
