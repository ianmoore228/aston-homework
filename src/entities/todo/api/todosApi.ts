import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Todo } from '../model/todo'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getTodoById: build.query<Todo, number>({
      query: (id) => `todos/${id}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, id) => [{ type: 'Todos', id }],
    }),
    getTodosByUserId: build.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
      keepUnusedDataFor: 70,
      providesTags: (_, __, userId) => [{ type: 'Todos', id: `USER-${userId}` }],
    }),
    getAllTodos: build.query<Todo[], void>({
      query: () => 'todos',
      keepUnusedDataFor: 70,
      providesTags: () => [{ type: 'Todos', id: 'LIST' }],
    }),
    refreshUserTodos: build.mutation<void, number>({
      queryFn: () => ({ data: undefined }),
      invalidatesTags: (_, __, userId) => [{ type: 'Todos', id: `USER-${userId}` }],
    }),
  }),
})

export const { useRefreshUserTodosMutation, useGetTodoByIdQuery, useGetTodosByUserIdQuery, useGetAllTodosQuery } = todosApi
