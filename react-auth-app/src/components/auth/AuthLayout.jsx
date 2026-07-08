import React from "react";
import { motion } from "framer-motion";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5">

      <motion.div
        initial={{ opacity:0,y:30 }}
        animate={{ opacity:1,y:0 }}
        transition={{ duration:0.5 }}
        className="bg-white w-full max-w-md rounded-3xl
        p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          {title}
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          {subtitle}
        </p>

        {children}
      </motion.div>

    </div>
  );
};

export default AuthLayout;