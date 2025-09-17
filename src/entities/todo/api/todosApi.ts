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
      providesTags: (result) =>
        result
          ? [
              ...result.map((todo) => ({ type: 'Todos' as const, id: todo.id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
})

export const { useGetTodoByIdQuery, useGetTodosByUserIdQuery, useGetAllTodosQuery } = todosApi
