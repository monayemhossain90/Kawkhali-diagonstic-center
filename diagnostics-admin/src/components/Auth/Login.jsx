// import {Card, Input, Typography, Button, Spinner} from "@material-tailwind/react";
// import { useForm} from "react-hook-form"
// import {useLoginMutation} from "../../redux/features/auth/authApi.js";
// import {useDispatch, useSelector} from "react-redux";
// import Error from "../validation/Error.jsx";
// import {SetLoginError} from "../../redux/features/auth/authSlice.js";

// const Login = () => {
//     const [login, {isLoading}] = useLoginMutation();
//     const dispatch = useDispatch();
//     const error = useSelector((state)=> state.auth.LoginError);

//     const {
//         register,
//         handleSubmit,
//         setValue,   
//         formState: { errors },
//     } = useForm();



//     const onSubmit = (data) =>{
//         // console.log(data);
//         dispatch(SetLoginError(""));
//         login(data);
//     };

//     const fillDummyCredentials = () => {
//     setValue("email", "dummyadmin@gmail.com");
//     setValue("password", "123456");
// };


//     return (
//         <>
//             <div className="min-h-screen grid place-items-center form-container">
//                 <Card color="transparent" className="p-7 bg-white w-[90%] sm:w-[450px]" shadow={true}>
//                     <Typography variant="h4" color="blue-gray">
//                         Admin Login
//                     </Typography>
//                     <Typography color="gray" className="mt-1 font-normal">
//                         Enter your email & password to login
//                     </Typography>
//                     {error && (
//                         <>
//                             <Error message={error}/>
//                         </>

//                     )
//                     }
//                     <br/>
//                     <form onSubmit={handleSubmit(onSubmit)} className="py-4 grid grid-cols-1 w-[100%] gap-6">

//                         <div>
//                             <Input
//                                 size="lg"
//                                 type="email"
//                                 label="Email Address"
//                                 {...register("email",
//                                     {
//                                         required: "Email is required",
//                                         pattern: {
//                                             value: /\S+@\S+\.\S+/,
//                                             message: "Enter valid email address"
//                                         },
//                                         maxLength: {value: 32, message: "Maximum 32 character"}
//                                     })}
//                                 error={Boolean(errors?.email?.message)}
//                             />
//                             {errors?.email?.message && (
//                                 <span className="error-text">{errors?.email?.message}</span>
//                             )}
//                         </div>

//                         <div>
//                             <Input
//                                 size="lg"
//                                 type="password"
//                                 label="Password"
//                                 {...register("password", {
//                                     required: {value: true, message: "Password is required!"},
//                                     minLength: {value: 6, message: "Minimum 6 character"},
//                                     maxLength: {value: 32, message: "Maximum 32 character"}
//                                 })}
//                                 error={Boolean(errors?.password?.message)}
//                             />
//                             {errors?.password?.message && (
//                                 <span className="error-text">{errors?.password?.message}</span>
//                             )}
//                         </div>

//                         <div className="w-full">
//     <Button
//         variant="outlined"
//         className="w-full mb-2"
//         type="button"
//         onClick={fillDummyCredentials}
//     >
//         Auto Fill Dummy Credentials
//     </Button>
// </div>
//                         <div className="w-full">
//                             <Button disabled={isLoading}
//                                     className={`${isLoading && "capitalize"} w-full flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
//                                     type="submit">
//                                 {
//                                     isLoading ? (
//                                         <>
//                                             <Spinner className="h-4 w-4"/> Processing...
//                                         </>
//                                     ) : (
//                                         <>
//                                             Login
//                                         </>
//                                     )
//                                 }

//                             </Button>
//                         </div>

//                     </form>
//                 </Card>
//             </div>
//         </>
//     );
// };

// export default Login;

import {
  Card,
  Input,
  Typography,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi.js";
import { useDispatch, useSelector } from "react-redux";
import Error from "../validation/Error.jsx";
import { SetLoginError } from "../../redux/features/auth/authSlice.js";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.LoginError);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(SetLoginError(""));
    login(data);
  };

  const fillDummyCredentials = () => {
    setValue("email", "dummyadmin@gmail.com");
    setValue("password", "123456");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 px-4">
      
      {/* Glass Card */}
      <Card
        shadow={true}
        className="w-full max-w-md p-8 backdrop-blur-lg bg-white/90 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <Typography variant="h4" className="font-bold text-gray-800">
            Admin Login
          </Typography>
          <Typography className=" text-md mt-1">
            Welcome back! Please login to your account
          </Typography>
        </div>

        {/* Error */}
        {error && <Error message={error} />}

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-4"
        >
          {/* Email */}
          <div>
            <Input
              size="lg"
              type="email"
              label="Email Address"
              className="focus:!border-blue-500"
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
              <p className="text-red-500 text-sm mt-1">
                {errors?.email?.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Input
              size="lg"
              type="password"
              label="Password"
              className="focus:!border-blue-500"
              {...register("password", {
                required: "Password is required!",
                minLength: { value: 6, message: "Minimum 6 character" },
                maxLength: { value: 32, message: "Maximum 32 character" },
              })}
              error={Boolean(errors?.password?.message)}
            />
            {errors?.password?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.password?.message}
              </p>
            )}
          </div>

          {/* Auto Fill Button */}
    {/* Auto Fill Button */}
<Button
  type="button"
  onClick={fillDummyCredentials}
  className="w-full text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
>
  Auto Fill Dummy Credentials
</Button>

          {/* Submit */}
          <Button
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
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
        </form>
      </Card>
    </div>
  );
};

export default Login;