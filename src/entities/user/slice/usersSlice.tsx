import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  selectedUserId: number;
}

const initialState: UsersState = {
  selectedUserId: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUserId: (state, action: PayloadAction<number>) => {
      state.selectedUserId = action.payload;
    },
  },
});

export const { setSelectedUserId } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
