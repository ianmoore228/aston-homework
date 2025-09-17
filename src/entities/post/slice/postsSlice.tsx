import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "@/entities/post";

interface PostsFilterState {
  filtered: Post[];
}

const initialState: PostsFilterState = {
  filtered: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilteredPosts: (state, action: PayloadAction<Post[]>) => {
      state.filtered = action.payload;
    },
  },
});

export const { setFilteredPosts } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;