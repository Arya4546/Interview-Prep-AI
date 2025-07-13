import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";
import { UserContext } from "../../context/userContext";
import axiosInstance from "../../utils/axiosInstance";
import uploadImage from "../../utils/uploadImage"; // Make sure this works correctly
import { API_PATHS } from "../../utils/apiPaths"; // Don't forget this import

const Signup = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your full name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    setError("");

    try {
      let profileImageUrl = "";

      if (profilePic) {
        // Upload image first
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      // Send signup data to backend
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard"); // Or whatever route your dashboard uses
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-[420px] mx-auto bg-white rounded-2xl px-6 md:px-10 py-8 md:py-10 shadow-2xl border border-yellow-200">
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
        Create an Account <span role="img" aria-label="rocket">🚀</span>
      </h3>
      <p className="text-sm md:text-base text-gray-500 mb-6">
        Join us and unlock your potential.
      </p>

      <form onSubmit={handleSignUp} className="flex flex-col gap-5">
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />

        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Your Email Address"
          placeholder="you@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="••••••••"
          type="password"
        />

        {error && (
          <p className="text-red-500 text-xs">{error}</p>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-xs md:text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("login")}
            className="font-semibold text-yellow-600 underline hover:text-yellow-500 transition-colors"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
