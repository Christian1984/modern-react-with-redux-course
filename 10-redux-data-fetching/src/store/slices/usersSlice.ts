import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

type User = {
  id: string;
  name: string;
};

type UserState = {
  data: User[];
  isLoading: boolean;
  error?: string | null;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.error = "Could not fetch users, reason: " + action.error.message;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });

    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Could not add user, reason: " + action.error.message;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    });
  },
});

export const usersReducer = usersSlice.reducer;
export type { User };
