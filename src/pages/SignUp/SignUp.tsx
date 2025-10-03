import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
import pesalens from "../../assets/PesaLens.png";

type SignUpFormInputs = {
  fullname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log("Sign-Up Data:", data);
  };

  const passwordValue = watch("password");

  return (
    <div className="flex min-h-screen w-screen">
      {/* Left Image Section */}
      <div
        className="hidden md:block w-1/2 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${pesalens})`,
          filter: "brightness(0.9)",
        }}
      ></div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 px-4 sm:px-8 py-6 max-w-md mx-auto my-auto">
        <h2 className="text-2xl font-bold text-emerald-600 mb-10 text-left underline">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            {...register("fullname", {
              required: "Full name is required",
              minLength: { value: 3, message: "Must be at least 3 characters" },
            })}
            error={errors.fullname?.message}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="xyz@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            error={errors.email?.message}
          />

          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="0700000000"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            error={errors.phone?.message}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="**********"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password?.message}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="**********"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
            error={errors.confirmPassword?.message}
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
