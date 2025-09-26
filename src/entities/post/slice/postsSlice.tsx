import {
  createSlice,
  createEntityAdapter,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Post } from "@/entities/post";


const filteredPostsAdapter = createEntityAdapter<Post>();

const initialState = filteredPostsAdapter.getInitialState();

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilteredPosts: (state, action: PayloadAction<Post[]>) => {
      filteredPostsAdapter.setAll(state, action.payload);
    }
  },
});

export const { setFilteredPosts } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

export const {
  selectAll: selectFilteredPosts,
  selectById: selectFilteredPostById,
} = filteredPostsAdapter.getSelectors((state: { posts: typeof initialState }) => state.posts);
