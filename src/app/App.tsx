import { MainLayout } from "../shared/layouts/mainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { withLoading } from "../shared/lib/hoc/WithLoading";
import { posts } from "../shared/mocks/posts";
import { useEffect, useState } from "react";
import { PostLengthFilter } from "../features/PostLengthFilter";
import { type FC } from "react";

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const PostWithLoading = withLoading(PostList);

  // Имитация загрузки 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <PostWithLoading posts={filteredPosts} isFetching={isLoading} />
      <PostLengthFilter posts={posts} onFilter={setFilteredPosts} />
    </MainLayout>
  );
};
