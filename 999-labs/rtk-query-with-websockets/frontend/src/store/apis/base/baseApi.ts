import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../..";

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5173",
  }),
  reducerPath: "api",
  endpoints: () => ({}),
});

export { baseApi };
