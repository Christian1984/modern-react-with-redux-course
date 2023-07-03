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
  tagTypes: ["album", "userAlbums"],
  endpoints: (builder) => ({
    fetchAlbums: builder.query<Album[], string>({
      providesTags: (result, error, userId) => [
        { type: "userAlbums", id: userId },
        ...(result?.map((album) => ({ type: "album" as const, id: album.id })) ?? []),
      ],
      query: (userId) => ({
        url: "/albums",
        params: {
          userId: userId,
        },
        method: "GET",
      }),
    }),
    addAlbum: builder.mutation<Album, string>({
      invalidatesTags: (result, error, userId) => [{ type: "userAlbums", id: userId }],
      query: (userId) => ({
        url: "/albums",
        body: {
          name: faker.commerce.productName(),
          userId: userId,
        },
        method: "POST",
      }),
    }),
    deleteAlbum: builder.mutation<Album, string>({
      invalidatesTags: (result, error, album) => [{ type: "album", id: album }],
      query: (album) => ({
        url: "/albums/" + album,
        method: "DELETE",
      }),
    }),
  }),
});

export type { Album };

export const { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } = albumsApi;
export { albumsApi };
