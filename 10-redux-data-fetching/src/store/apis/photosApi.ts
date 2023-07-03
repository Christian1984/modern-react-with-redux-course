import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Photo = {
  id: string;
  name: string;
  url: string;
  albumId: string;
};

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  tagTypes: ["photo", "albumPhotos"],
  endpoints: (builder) => ({
    fetchPhotos: builder.query<Photo[], string>({
      providesTags: (result, error, albumId) => [
        { type: "albumPhotos", id: albumId },
        ...(result?.map((photo) => ({ type: "photo" as const, id: photo.id })) ?? []),
      ],
      query: (albumId) => ({
        url: "/photos",
        params: {
          albumId: albumId,
        },
        method: "GET",
      }),
    }),
    addPhoto: builder.mutation<Photo, string>({
      invalidatesTags: (result, error, albumId) => [{ type: "albumPhotos", id: albumId }],
      query: (albumId) => ({
        url: "/photos",
        body: {
          name: faker.commerce.productName(),
          url: faker.image.urlPicsumPhotos({
            width: 150,
            height: 150,
          }),
          albumId: albumId,
        },
        method: "POST",
      }),
    }),
    deletePhoto: builder.mutation<Photo, string>({
      invalidatesTags: (result, error, photoId) => [{ type: "photo", id: photoId }],
      query: (photoId) => ({
        url: "/photos/" + photoId,
        method: "DELETE",
      }),
    }),
  }),
});

export type { Photo };

export const { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;
export { photosApi };
