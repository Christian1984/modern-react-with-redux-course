import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../slices/usersSlice";
import pause from "./pause";

const addUser = createAsyncThunk("users/add", async () => {
  await pause();
  const response = await axios.post("http://localhost:3005/users/", {
    name: faker.person.fullName(),
  });

  return response.data as User;
});

export { addUser };
