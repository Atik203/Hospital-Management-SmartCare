import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ServiceData } from "../../types/serviceData";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  // #TODO have to add the base url {baseUrl: "https://jsonplaceholder.typicode.com/"}
  endpoints: (builder) => ({
    // TODO: have to add endpoints
    getServices: builder.query<ServiceData[], void>({
      query: () => "/serviceData.json",
    }),
  }),
});

export const { useGetServicesQuery } = api;
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
