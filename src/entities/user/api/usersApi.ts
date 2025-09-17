import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '../model/user'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getUserById: build.query<User, number>({
      query: (id) => `users/${id}`,
      keepUnusedDataFor: 70, 
      providesTags: (_, __, id) => [{ type: 'Users', id }],
    }),
    getAllUsers: build.query<User[], void>({
      query: () => 'users',
      keepUnusedDataFor: 70,
      providesTags: (result) =>
        result
          ? [
              ...result.map((user) => ({ type: 'Users' as const, id: user.id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
  }),
})

export const { useGetUserByIdQuery, useGetAllUsersQuery } = usersApi