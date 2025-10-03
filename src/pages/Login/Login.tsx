import React, { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
import pesalens from "../../assets/PesaLens.png";

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
    <div className="flex min-h-screen w-screen">
      {/* Form Section */}
      <div className="w-full md:w-1/2 px-4 sm:px-6 py-6 max-w-md mx-auto my-auto">
        <h2 className="text-2xl font-bold text-emerald-600 mb-10 text-left underline">
          Login To Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="07********"
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

      {/* Image Section */}
      <div
        className="hidden md:block w-1/2 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${pesalens})`,
          filter: "brightness(0.9)",
        }}
      ></div>
    </div>
  );
};

export default Login;
