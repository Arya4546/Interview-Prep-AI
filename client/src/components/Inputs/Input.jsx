import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({
  value,
  onChange,
  label,
  placeholder = "",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const isFilled = value && value.length > 0;

  return (
    <div className="relative w-full mb-6">
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          block w-full rounded-md px-4 py-4 border border-gray-300 
          text-base text-gray-900 bg-white/80 backdrop-blur-md
          focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none
          transition-all peer
        `}
      />

      <label
        className={`
          absolute left-4 px-1 backdrop-blur-md text-gray-500 
          transition-all pointer-events-none bg-white/80
          ${isFilled ? "-top-2 left-3 text-xs text-amber-600 bg-white/90" : "top-4 opacity-0"}
          peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-amber-600 peer-focus:bg-white/90 peer-focus:opacity-100
        `}
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors"
        >
          {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
        </button>
      )}
    </div>
  );
};

export default Input;
