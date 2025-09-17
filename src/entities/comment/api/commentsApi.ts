import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Comment } from '../model/comment'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  tagTypes: ['Comments'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getCommentByPostId: build.query<Comment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, postId) => [{ type: 'Comments', id: `POST-${postId}` }],
    }),
    getAllComments: build.query<Comment[], void>({
      query: () => 'comments',
      keepUnusedDataFor: 70,
      providesTags: (result) =>
        result
          ? [
              ...result.map((comment) => ({ type: 'Comments' as const, id: comment.id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
})

export const { useGetCommentByPostIdQuery, useGetAllCommentsQuery } = commentsApi
