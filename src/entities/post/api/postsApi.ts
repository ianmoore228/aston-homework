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
      providesTags: (_, __, id) => [{ type: "Posts", id: `USER-${id}` }],
    }),
    getAllPosts: build.query<Post[], void>({
      query: () => "posts",
      keepUnusedDataFor: 70,
      providesTags: () => [{ type: "Posts", id: "LIST" }],
    }),
    refreshAllPosts: build.mutation<void, void>({
      queryFn: () => ({ data: undefined }),
      invalidatesTags: [{ type: "Posts" }],
    })
  }),
});

export const {
  useRefreshAllPostsMutation,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
  useGetAllPostsQuery,
} = postsApi;
