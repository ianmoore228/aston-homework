import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Album } from '@/entities/album'

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  tagTypes: ['Albums'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getAlbumById: build.query<Album[], number>({
      query: (id) => `albums/${id}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, id) => [{ type: 'Albums', id }],
    }),
    getAlbumsByUserId: build.query<Album[], number>({
      query: (id) => `albums?userId=${id}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, id) => [{ type: 'Albums', id: `USER-${id}` }],
    }),
    getAllAlbums: build.query<Album[], void>({
      query: () => 'albums',
      keepUnusedDataFor: 70,
      providesTags: (result) =>
        result
          ? [
              ...result.map((album) => ({ type: 'Albums' as const, id: album.id })),
              { type: 'Albums', id: 'LIST' },
            ]
          : [{ type: 'Albums', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetAlbumByIdQuery,
  useGetAlbumsByUserIdQuery,
  useGetAllAlbumsQuery,
} = albumsApi
