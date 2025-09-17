import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "@/entities/post";

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPostById: build.query<Post, number>({
      query: (id) => `posts/${id}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, id) => [{ type: "Posts", id }],
    }),
    getPostsByUserId: build.query<Post[], number>({
      query: (id) => `posts?userId=${id}`,
      keepUnusedDataFor: 70,
      providesTags: (result, _, id) =>
        result
          ? [
              ...result.map((post) => ({
                type: "Posts" as const,
                id: post.id,
              })),
              { type: "Posts", id: `USER-${id}` },
            ]
          : [{ type: "Posts", id: `USER-${id}` }],
    }),
    getAllPosts: build.query<Post[], void>({
      query: () => "posts",
      keepUnusedDataFor: 70,
      providesTags: (result) =>
        result
          ? [
              ...result.map((post) => ({
                type: "Posts" as const,
                id: post.id,
              })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
  useGetAllPostsQuery,
} = postsApi;
