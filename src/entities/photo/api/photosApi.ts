import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Photo } from '../model/types'

export const photosApi = createApi({
  reducerPath: 'photosApi',
  tagTypes: ['Photos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getPhotoById: build.query<Photo, number>({
      query: (id) => `photos/${id}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, id) => [{ type: 'Photos', id }],
    }),
    getPhotosByAlbumId: build.query<Photo[], number>({
      query: (albumId) => `photos?albumId=${albumId}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, albumId) => [{ type: 'Photos', id: `ALBUM-${albumId}` }],
    }),
    getAllPhotos: build.query<Photo[], void>({
      query: () => 'photos',
      keepUnusedDataFor: 70,
      providesTags: () => [{ type: 'Photos', id: 'LIST' }],
    }),
    refreshUserPhotos: build.mutation<void, number>({
      queryFn: () => ({ data: undefined }),
      invalidatesTags: (_, __, userId) => [{ type: 'Photos', id: `ALBUM-${userId}` }],
    }),
  }),
})

export const { useRefreshUserPhotosMutation, useGetPhotoByIdQuery, useGetPhotosByAlbumIdQuery, useGetAllPhotosQuery } = photosApi