// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// import {getToken} from "../../../helper/SessionHelper.js";

// const baseQuery = fetchBaseQuery({
//     // baseUrl: "https://diagnostics-api.vercel.app/api",
//     baseUrl: "http://localhost:5000/api",
//     prepareHeaders: async (headers, {getState, endpoint}) =>{
//         if(getToken()){
//             headers.set("token", getToken());
//         }
//         return headers;
//     }
// });

// export const apiSlice = createApi({
//     reducerPath: "api",
//     baseQuery: async (args, api, extraOptions) => {
//         let result = await baseQuery(args, api, extraOptions);
//         if (result?.error?.status === 401) {
//             localStorage.clear();
//             // ErrorToast("Token Expired");
//             window.location.href="/";
//         }
//         return result;
//     },
//     tagTypes: ["Users", "Products", "Product", "CategoryList"], //TagS WhiteLists
//     endpoints: (builder) => ({}),
// })



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../../helper/SessionHelper.js";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    if (getToken()) {
      headers.set("token", getToken());
    }
    return headers;
  },
});

// Wrapper around baseQuery to handle FormData properly
const baseQuery = async (args, api, extraOptions) => {
  // If body is FormData, make sure headers don’t override it
  if (args?.body instanceof FormData) {
    if (args.headers) {
      const { "Content-Type": _, ...rest } = args.headers;
      args.headers = rest; // remove content-type so browser sets boundary
    }
  }

  let result = await rawBaseQuery(args, api, extraOptions);

  // Handle expired token
  if (result?.error?.status === 401) {
    localStorage.clear();
    window.location.href = "/";
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Users", "Products", "Product", "CategoryList"], // TagS WhiteLists
  endpoints: (builder) => ({}),
});
