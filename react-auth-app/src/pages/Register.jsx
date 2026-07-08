import React, { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Start your journey"
    >
      <form onSubmit={handleSubmit}>

        <Input
          label="Full Name"
          placeholder="John Doe"
          onChange={(e)=>
            setForm({...form,name:e.target.value})
          }
        />

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
          placeholder="Password"
          onChange={(e)=>
            setForm({...form,password:e.target.value})
          }
        />

        <Button>Register</Button>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-indigo-600 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;