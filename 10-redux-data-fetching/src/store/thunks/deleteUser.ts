import { createAsyncThunk } from "@reduxjs/toolkit";
import pause from "./pause";
import axios from "axios";

const deleteUser = createAsyncThunk("user/delete", async (userId: string) => {
  await pause();
  // const response = await axios.delete("http://localhost:3005/users/" + userId);
  // return response.data; // this will always return an empty object

  await axios.delete("http://localhost:3005/users/" + userId);
  return userId;
});

export { deleteUser };
