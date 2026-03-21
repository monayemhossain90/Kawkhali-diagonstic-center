import { apiSlice } from "../api/apiSlice.js";
import { SuccessToast } from "../../../helper/ValidationHelper.js";
import { setEmail, setOtp, setToken } from "../../../helper/SessionHelper.js";
import {
  SetForgotError,
  SetLoginError,
  SetNewPasswordError,
  SetRegisterError,
  SetVerifyOtpError
} from "./authSlice.js";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    // Registration (with file upload support)
    // registration: builder.mutation({
    //   query: (formData) => ({
    //     url: "/auth/register",
    //     method: "POST",
    //     body: formData, // FormData object
    //     // DO NOT manually set Content-Type; browser handles multipart/form-data
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const res = await queryFulfilled;
    //       if (res?.data?.message === "success") {
    //         SuccessToast("Register Success");
    //       }
    //     } catch (err) {
    //       const status = err?.error?.status;
    //       const result = err?.error?.data?.data || "Something went wrong";
    //       if (status === 409) {
    //         dispatch(SetRegisterError(result));
    //       } else {
    //         dispatch(SetRegisterError(result));
    //       }
    //     }
    //   },
    // }),

    registration: builder.mutation({
  query: (formData) => ({
    url: "/auth/register",
    method: "POST",
    body: formData, // <-- FormData is passed directly
    // 🚫 No headers: { "Content-Type": "application/json" }
    // fetch automatically sets multipart/form-data with boundary
  }),
  async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    try {
      const res = await queryFulfilled;
      if (res?.data?.message === "User registered successfully" || res?.data?.message === "success") {
        SuccessToast("Register Success");
      }
    } catch (err) {
      const status = err?.error?.status;
      const result = err?.error?.data?.data || "Something went wrong";
      if (status === 409) {
        dispatch(SetRegisterError(result));
      } else {
        dispatch(SetRegisterError(result));
      }
    }
  },
}),

    // Login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          if (res?.data?.message === "success") {
            const token = res.data.token;
            setToken(token);
            SuccessToast("Login Success");
            setTimeout(() => {
              window.location.href = "/";
            }, 500);
          }
        } catch (err) {
          const status = err?.error?.status;
          if (status === 404) dispatch(SetLoginError("Could not Find this Email!"));
          else if (status === 400) dispatch(SetLoginError("Wrong Password!"));
          else if (status === 403) dispatch(SetLoginError("This Account is Banned"));
          else dispatch(SetLoginError("Something Went Wrong!"));
        }
      },
    }),

    // Forgot Password - Verify Email
    forgotPasswordVerifyEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password-verify-email",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const status = res?.meta?.response?.status;
          if (status === 200) setEmail(arg.email);
        } catch (err) {
          const status = err?.error?.status;
          if (status === 404) dispatch(SetForgotError("Could not Find this Email!"));
        }
      },
    }),

    // Forgot Password - Verify OTP
    forgotPasswordVerifyOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password-verify-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const status = res?.meta?.response?.status;
          if (status === 200) setOtp(arg.otp);
        } catch (err) {
          const status = err?.error?.status;
          const result = err?.error?.data?.data;
          if (status === 400) dispatch(SetVerifyOtpError(result));
        }
      },
    }),

    // Create New Password
    createNewPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/create-new-password",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const status = res?.meta?.response?.status;
          if (status === 200) localStorage.clear();
        } catch (err) {
          const status = err?.error?.status;
          const result = err?.error?.data?.data;
          if (status === 400) dispatch(SetNewPasswordError(result));
        }
      },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useForgotPasswordVerifyEmailMutation,
  useForgotPasswordVerifyOtpMutation,
  useCreateNewPasswordMutation,
} = authApi;
