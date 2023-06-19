import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e9a675f2f9msh6a06ca8e9444725p19fbaajsn85f4dfb9620e",
//     "X-RapidAPI-Host": "shazam-api7.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "e9a675f2f9msh6a06ca8e9444725p19fbaajsn85f4dfb9620e"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track'}),
  })
});

export const {
    useGetTopChartsQuery,
} = shazamApi

