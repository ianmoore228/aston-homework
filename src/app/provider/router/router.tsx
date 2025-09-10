import { createBrowserRouter } from "react-router-dom";
import { App } from "@/app";
import { PostListPage } from "@/pages/PostListPage";
import { PostPage } from "@/pages/PostPage/PostPage";
import { AlbumsPage } from "@/pages/AlbumsPage";
import { PhotosPage } from "@/pages/PhotosPage";
import { TodosPage } from "@/pages/TodosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostListPage /> },
      { path: "/posts", element: <PostListPage /> },
      { path: "post/:id", element: <PostPage /> },
      { path: "users/:id/albums", element: <AlbumsPage /> },
      { path: "albums/:id/photos", element: <PhotosPage /> },
      { path: "users/:id/todos", element: <TodosPage /> },
      { path: "users/:id/posts", element: <PostListPage /> },
    ],
  },
  // { path: "/users/:id/posts", element: <UserPostsPage /> },
]);
