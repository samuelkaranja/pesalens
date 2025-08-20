import React, { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

type LoginFormInputs = {
  phone: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login Data:", data);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-[80vh] md:min-h-[85vh] lg:min-h-[85vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Phone Number"
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid phone number",
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

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between items-center">
          <Link to="" className="text-sm text-emerald-600 hover:underline">
            Forgot Password
          </Link>
          <Link to="" className="text-sm text-emerald-600 hover:underline">
            Need Help?
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-emerald-600 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
