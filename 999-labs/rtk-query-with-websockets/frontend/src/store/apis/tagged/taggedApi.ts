import { generatedApi } from "../generated/generatedApi";

const taggedApi = generatedApi.enhanceEndpoints({
  addTagTypes: ["Counter"],
  endpoints: {
    getApiCounter: {
      providesTags: () => ["Counter"],
    },
  },
});

export const {} = taggedApi;
export { taggedApi };
