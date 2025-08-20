import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

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
    <div className="min-h-[90vh] md:min-h-[85vh] lg:min-h-[85vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Full Name"
            type="text"
            {...register("fullname", {
              required: "Full name is required",
              minLength: { value: 3, message: "Must be at least 3 characters" },
            })}
            error={errors.fullname?.message}
          />

          <FormInput
            label="Email"
            type="email"
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
