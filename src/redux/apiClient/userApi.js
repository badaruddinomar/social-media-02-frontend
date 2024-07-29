import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
    responseHandler: async (response) => {
      const contentType = response.headers.get("Content-Type");
      if (contentType.includes("application/json")) {
        return response.json();
      } else if (contentType.includes("text/html")) {
        return response.text();
      } else {
        throw new Error("Unsupported content type");
      }
    },
  }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    userSignIn: builder.mutation({
      query: (bodyData) => ({
        url: "/user/sign-in",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
        credentials: "include",
      }),
    }),
    userSignUp: builder.mutation({
      query: (bodyData) => ({
        url: "/user/sign-up",
        method: "POST",
        body: bodyData,
        credentials: "include",
      }),
    }),
  }),
});
export const { useUserSignInMutation, useUserSignUpMutation } = userApi;
