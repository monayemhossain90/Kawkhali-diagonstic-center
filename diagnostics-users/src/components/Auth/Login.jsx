

import { Card, Input, Typography, Button, Spinner } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi.js";
import { useDispatch, useSelector } from "react-redux";
import Error from "../validation/Error.jsx";
import { SetLoginError } from "../../redux/features/auth/authSlice.js";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.LoginError);

  const {
    register,
    handleSubmit,
    setValue, // ✅ important
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(SetLoginError(""));
    login(data);
  };

  // ✅ Dummy credential function
  const fillDummyCredentials = () => {
    setValue("email", "kobirhossain@gmail.com");
    setValue("password", "123456");
  };

  return (
    <div className="min-h-[80vh] py-8 mt-1 grid place-items-center form-container">
      <Card color="transparent" className="p-7 bg-white w-[90%] sm:w-[450px]" shadow={true}>
        
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your email & password to login
        </Typography>

        {error && <Error message={error} />}

        <form onSubmit={handleSubmit(onSubmit)} className="py-4 grid grid-cols-1 w-full gap-6">
          
          {/* Email */}
          <div>
            <Input
              size="lg"
              type="email"
              label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter valid email address",
                },
                maxLength: { value: 32, message: "Maximum 32 character" },
              })}
              error={Boolean(errors?.email?.message)}
            />
            {errors?.email?.message && (
              <span className="error-text">{errors?.email?.message}</span>
            )}
          </div>

          {/* Password */}
          <div>
            <Input
              size="lg"
              type="password"
              label="Password"
              {...register("password", {
                required: "Password is required!",
                minLength: { value: 6, message: "Minimum 6 character" },
                maxLength: { value: 32, message: "Maximum 32 character" },
              })}
              error={Boolean(errors?.password?.message)}
            />
            {errors?.password?.message && (
              <span className="error-text">{errors?.password?.message}</span>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-end">
            <Link
              to="/forgot-password"
              className="text-gray-500 hover:underline duration-200"
            >
              Forgot Password?
            </Link>
          </div>

          {/* ✅ Auto Fill Button */}
          <Button
            type="button"
            onClick={fillDummyCredentials}
            className="w-full text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Auto Fill Dummy Credentials
          </Button>

          {/* Submit Button */}
          <Button
            disabled={isLoading}
            className="w-full flex gap-3 items-center justify-center"
            type="submit"
          >
            {isLoading ? (
              <>
                <Spinner className="h-4 w-4" /> Processing...
              </>
            ) : (
              "Login"
            )}
          </Button>

          {/* Register */}
          <div className="flex flex-row items-center justify-center text-sm font-medium space-x-1 text-gray-500">
            <p>Don’t have account?</p>
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </div>

        </form>
      </Card>
    </div>
  );
};

export default Login;