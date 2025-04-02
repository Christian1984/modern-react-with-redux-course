import { baseApi as api } from "../base/baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiCounter: build.query<GetApiCounterApiResponse, GetApiCounterApiArg>({
      query: () => ({ url: `/api/counter` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type GetApiCounterApiResponse = /** status 200 Successful response */ {
  value?: number;
};
export type GetApiCounterApiArg = void;
export const { useGetApiCounterQuery } = injectedRtkApi;
