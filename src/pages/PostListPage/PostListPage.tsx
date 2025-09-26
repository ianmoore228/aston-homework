import { PostList } from "@/widgets/PostList/PostList";
import { withLoading } from "@/shared/lib/hoc/WithLoading";
import { PostLengthFilter } from "@/features/PostLengthFilter";
import styles from "./PostListPage.module.css";
import { SelectUser } from "@/features/SelectUser";
import { usePosts } from "@/features/PostList";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { Button } from "@/shared/ui/Button";
import { useRefreshAllPostsMutation } from "@/entities/post";
import { useParams } from "react-router-dom";

const PostWithLoading = withLoading(PostList);

export const PostListPage = () => {
  const {
    posts,
    setFilteredPosts,
    error,
    isFetching,
    onSelectUser,
    selectedUserId,
  } = usePosts();

  const { userId } = useParams();

  const [refreshAllPosts] = useRefreshAllPostsMutation();

  const handleRefresh = () => refreshAllPosts();

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
                <div className={styles.refreshButton}>
                <Button type="button" onClick={handleRefresh}>
                  Invalidate
                </Button>
                </div>
                <PostLengthFilter
                 userId={userId ? Number(userId) : null}
                  isLoading={isFetching}
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
