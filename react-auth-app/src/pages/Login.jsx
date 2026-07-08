import React, { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email:"",
    password:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("isAuth", "true");

    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue"
    >
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          onChange={(e)=>
            setForm({...form,email:e.target.value})
          }
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          onChange={(e)=>
            setForm({...form,password:e.target.value})
          }
        />

        <Button>Login</Button>

        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;