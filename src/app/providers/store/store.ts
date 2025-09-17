import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '@/entities/post'
import { commentsApi } from '@/entities/comment'
import { usersApi } from '@/entities/user'
import { albumsApi } from '@/entities/album'
import { photosApi } from '@/entities/photo'
import { todosApi } from '@/entities/todo'
import { postsReducer } from '@/entities/post'
import { usersReducer } from '@/entities/user'

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        posts: postsReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware).concat(commentsApi.middleware).concat(usersApi.middleware).concat(albumsApi.middleware).concat(photosApi.middleware).concat(todosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch