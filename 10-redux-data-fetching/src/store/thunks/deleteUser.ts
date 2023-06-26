import { createAsyncThunk } from "@reduxjs/toolkit";
import pause from "./pause";
import axios from "axios";

const deleteUser = createAsyncThunk("user/delete", async (userId: string) => {
  await pause(2000);
  const response = await axios.delete("http://localhost:3005/users/" + userId);

  return response.data;
});

export { deleteUser };
