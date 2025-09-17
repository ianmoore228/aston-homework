import { PostList } from "@/widgets/PostList/PostList";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { PostLengthFilter } from "@/features/PostLengthFilter";
import styles from "./PostListPage.module.css";
import { SelectUser } from "@/features/SelectUser";
import type { FC } from "react";
import { usePosts } from "@/features/PostList";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";

const PostWithLoading = withLoading(PostList);

export const PostListPage: FC = () => {
  const {
    posts,
    setFilteredPosts,
    error,
    isFetching,
    onSelectUser,
    selectedUserId,
  } = usePosts();

  return (
    <div className={styles.postListPage}>
      <div className={styles.postListPageContent}>
        <div className={styles.postListPageContentTop}>
          <PostWithLoading posts={posts} isFetching={isFetching} />

          {!isFetching &&
            (error ? (
              <ErrorMessage />
            ) : (
              <div className={styles.filters}>
                <PostLengthFilter
                  isLoading={isFetching}
                  userId={selectedUserId || 1}
                  posts={posts}
                  onFilter={setFilteredPosts}
                />
                <SelectUser
                  userId={selectedUserId || 1}
                  onSelect={onSelectUser}
                  path="posts"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
