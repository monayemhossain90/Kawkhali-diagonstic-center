import { Card, Input, Typography, Button, Spinner } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRegistrationMutation } from "../../redux/features/auth/authApi.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetRegisterError } from "../../redux/features/auth/authSlice.js";
import Error from "../validation/Error.jsx";
import { IoMdClose } from "react-icons/io";
import convertToBase64 from "../../helper/convertToBase64.js";

const Register = () => {
  const [registration, { isLoading, isSuccess }] = useRegistrationMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.RegisterError);

  const [image, setImage] = useState(null); // File object
  const [filePreview, setFilePreview] = useState(""); // base64 for preview

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  // Navigate to login on success
  useEffect(() => {
    if (isSuccess) navigate("/login");
  }, [isSuccess, navigate]);

  const onSubmit = async (data) => {
    dispatch(SetRegisterError(""));

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (image) formData.append("image", image);

    registration(formData);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setFilePreview(base64);
      setImage(file);
    }
  };

  const removeImage = () => {
    setFilePreview("");
    setImage(null);
  };

  return (
    <div className="min-h-[80vh] py-8 mt-1 grid place-items-center form-container">
      <Card color="transparent" className="p-7 bg-white w-[90%] sm:w-[500px]" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        {error && <Error message={error} />}
        <br />

        <form onSubmit={handleSubmit(onSubmit)} className="py-4 grid grid-cols-1 w-[100%] md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="w-full col-span-2 md:col-span-1">
            <Input
              size="lg"
              type="text"
              label="First Name"
              {...register("firstName", {
                required: "First Name is required!",
                minLength: { value: 3, message: "Minimum 3 characters" },
                maxLength: { value: 32, message: "Maximum 32 characters" },
              })}
              error={Boolean(errors?.firstName?.message)}
            />
            {errors?.firstName?.message && <span className="error-text">{errors.firstName.message}</span>}
          </div>

          {/* Last Name */}
          <div className="w-full col-span-2 md:col-span-1">
            <Input
              size="lg"
              type="text"
              label="Last Name"
              {...register("lastName", {
                required: "Last Name is required!",
                minLength: { value: 3, message: "Minimum 3 characters" },
                maxLength: { value: 32, message: "Maximum 32 characters" },
              })}
              error={Boolean(errors?.lastName?.message)}
            />
            {errors?.lastName?.message && <span className="error-text">{errors.lastName.message}</span>}
          </div>

          {/* Email */}
          <div className="col-span-2">
            <Input
              size="lg"
              type="email"
              label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Enter valid email address" },
              })}
              error={Boolean(errors?.email?.message)}
            />
            {errors?.email?.message && <span className="error-text">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="w-full col-span-2 md:col-span-1">
            <Input
              size="lg"
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is required!",
                minLength: { value: 6, message: "Minimum length 6" },
                maxLength: { value: 30, message: "Maximum length 30" },
                validate: (val) => /^\S*$/.test(val) || "Password must not contain Whitespaces!",
              })}
              error={Boolean(errors?.password?.message)}
            />
            {errors?.password?.message && <span className="error-text">{errors.password.message}</span>}
          </div>

          {/* Confirm Password */}
          <div className="w-full col-span-2 md:col-span-1">
            <Input
              size="lg"
              type="password"
              label="Confirm Password"
              {...register("confirmPass", {
                required: "Confirm password is required!",
                validate: (val) => val === getValues("password") || "Passwords do not match",
              })}
              error={Boolean(errors?.confirmPass?.message)}
            />
            {errors?.confirmPass?.message && <span className="error-text">{errors.confirmPass.message}</span>}
          </div>

          {/* File Upload */}
          <div className="col-span-2 mt-5">
            {!filePreview ? (
              <label
                htmlFor="photo"
                className="bg-gray-800 md:w-1/2 cursor-pointer text-center inline-block hover:bg-white text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 duration-300 rounded shadow"
              >
                Upload Photo
              </label>
            ) : (
              <div className="md:col-span-2 md:w-1/2 grid place-items-center mt-5 relative">
                <img className="w-[200px] h-[200px] object-cover" src={filePreview} alt="profile" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="close-btn bg-black p-2 rounded-md absolute top-0 -right-12"
                >
                  <IoMdClose className="text-white" size={24} />
                </button>
              </div>
            )}
            <input
              type="file"
              id="photo"
              hidden
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button type="reset" variant="outlined">
              Reset
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full flex gap-3 items-center justify-center disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Spinner className="h-4 w-4" /> Processing...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </div>

          {/* Login link */}
          <div className="col-span-2 flex justify-center text-sm font-medium text-gray-500 mt-4">
            <p>Already have an account?</p>
            <Link to="/login" className="ml-1 text-blue-600">
              Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Register;
