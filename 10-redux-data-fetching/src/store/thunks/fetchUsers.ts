import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../slices/usersSlice";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  // return new Promise<User[]>((resolve, reject) => {
  //   setTimeout(async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3005/users");
  //       return resolve(response.data as User[]);
  //     } catch (err) {
  //       reject(err);
  //     }
  //   }, 1000);
  // });

  const response = await axios.get("http://localhost:3005/users");
  await pause(2000);
  return response.data as User[];
});

const pause = async (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export { fetchUsers };
