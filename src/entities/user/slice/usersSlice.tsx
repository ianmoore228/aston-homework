import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  id: number;
}

const usersAdapter = createEntityAdapter<UsersState>();

const initialState = usersAdapter.getInitialState({
  selectedUserId: 1,
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUserId: (state, action: PayloadAction<number>) => {
      state.selectedUserId = action.payload;
    }
  },
});

export const {
  setSelectedUserId,
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

export const {
  selectAll: selectAllUsers,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors<{ users: typeof initialState }>(
  (state) => state.users
);