import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const {updateUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");

    try {
       const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
       });

       const { token } = response.data;

       if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data)
        navigate("/dashboard");
       }
    } catch (error) {
      if(error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else{
      setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-[95%] md:w-[500px] lg:w-[550px] mx-auto bg-white rounded-2xl px-10 py-12 shadow-xl border border-yellow-200 animate-fade-in">

      <h3 className="text-4xl font-extrabold text-gray-900 mb-2">Welcome Back 👋</h3>
      <p className="text-base text-gray-500 mb-8">Sign in to your account to continue.</p>

      <form onSubmit={handleLogin} className="flex flex-col gap-6">
      <Input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  label="Your Email Address"
  placeholder="you@example.com"
  type="email"
  icon={HiMail}
/>


        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Your Password"
          placeholder="••••••••"
          type="password"
          icon={HiLockClosed}
        />

        {error && (
          <p className="text-red-500 text-xs">{error}</p>
        )}

 <button
  type="submit"
  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
>
  Login
</button>



        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("signup")}
            className="font-semibold text-amber-600 underline hover:text-amber-500 transition-colors"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
