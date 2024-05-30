import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { doctorData } from "../../types/doctorData";
import { ServiceData } from "../../types/serviceData";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  // #TODO have to add the base url {baseUrl: "https://jsonplaceholder.typicode.com/"}
  endpoints: (builder) => ({
    // TODO: have to add endpoints
    getServices: builder.query<ServiceData, void>({
      query: () => "/service/list/",
    }),
    getDoctors: builder.query<doctorData, number>({
      query: (page = 1) => `/doctor/list/?page=${page}`,
    }),
  }),
});

export const { useGetServicesQuery, useGetDoctorsQuery } = api;
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
