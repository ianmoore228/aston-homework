import { createBrowserRouter } from "react-router-dom";
import { App } from "@/app";
import { PostListPage } from "@/pages/PostListPage";
import { PostPage } from "@/pages/PostPage";
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
      // users
      {
        path: "users/:userId",
        children: [
          { path: "posts", element: <PostListPage /> },
          { path: "todos", element: <TodosPage /> },
          //albums
          {
            path: "albums",
            element: <AlbumsPage />,
            children: [
              //photos
              {
                path: ":albumId/photos",
                element: <PhotosPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
