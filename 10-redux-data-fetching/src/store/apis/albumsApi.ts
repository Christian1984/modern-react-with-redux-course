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
  tagTypes: ["albums"],
  endpoints: (builder) => ({
    fetchAlbums: builder.query<Album[], string>({
      providesTags: (result, error, userId) => [{type: "albums", id: userId}],
      query: (userId) => ({
        url: "/albums",
        params: {
          userId: userId,
        },
        method: "GET",
      }),
    }),
    addAlbum: builder.mutation<Album, string>({
      invalidatesTags: (result, error, userId) => [{type: "albums", id: userId}],
      query: (userId) => ({
        url: "/albums",
        body: {
          name: faker.commerce.productName(),
          userId: userId
        },
        method: "POST"
      })
    }),
    deleteAlbum: builder.mutation<Album, Album>({
      invalidatesTags: (result, error, album) => [{type: "albums", id: album.userId}],
      query: (album) => ({
        url: "/albums/" + album.id,
        method: "DELETE"
      })
    })
  }),
});

export type { Album };

export const { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } = albumsApi;
export { albumsApi };
