import { MainLayout } from "../shared/layouts/mainLayout/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { posts } from "../shared/mocks/posts";
import { type FC } from "react";

export const App: FC = () => {

  return (
    <MainLayout>
      <PostList posts={posts} />
    </MainLayout>
  );
};
