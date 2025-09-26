import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Album } from '@/entities/album'

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  tagTypes: ['Albums'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getAlbumById: build.query<Album, number>({
      query: (id) => `albums/${id}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, id) => [{ type: 'Albums', id }],
    }),
    getAlbumsByUserId: build.query<Album[], number>({
      query: (id) => `albums?userId=${id}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, id) => [{ type: 'Albums', id: `USER-${id}` }],
    }),
    getAllAlbums: build.query<Album[], number>({
      query: () => 'albums',
      keepUnusedDataFor: 70,
      providesTags: () => [{ type: 'Albums', id: 'LIST' }],
    }),
    refreshUserAlbums: build.mutation<void, number>({
      queryFn: () => ({ data: undefined }),
      invalidatesTags: (_, __, userId) => [
        { type: 'Albums', id: `USER-${userId}` },
      ],
    })
  }),
})

export const {
  useGetAlbumByIdQuery,
  useGetAlbumsByUserIdQuery,
  useGetAllAlbumsQuery,
  useRefreshUserAlbumsMutation
} = albumsApi
