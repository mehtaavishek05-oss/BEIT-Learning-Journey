import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1">
        {label}
      </label>

      <input
        {...props}
        className="w-full px-4 py-3 border rounded-xl outline-none
        focus:ring-2 focus:ring-indigo-500 transition"
      />
    </div>
  );
};

export default Input;