import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Album = {
  id: string;
  name: string;
  userId: string;
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => ({
    fetchAlbums: builder.query<Album[], string>({
      query: (userId) => ({
        url: "/albums",
        params: {
          userId: userId,
        },
        method: "GET",
      }),
    }),
    addAlbum: builder.mutation<Album, string>({
      query: (userId) => ({
        url: "/albums",
        body: {
          name: faker.commerce.productName(),
          userId: userId
        },
        method: "POST"
      })
    })
  }),
});

export type { Album };

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
