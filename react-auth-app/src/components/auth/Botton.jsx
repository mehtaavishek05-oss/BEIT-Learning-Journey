import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-indigo-600 hover:bg-indigo-700
      text-white py-3 rounded-xl font-semibold
      transition-all duration-300 shadow-lg"
    >
      {children}
    </button>
  );
};

export default Button;