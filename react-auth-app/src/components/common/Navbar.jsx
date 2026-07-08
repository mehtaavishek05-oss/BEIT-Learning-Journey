import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold text-indigo-600">
        My Dashboard
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;