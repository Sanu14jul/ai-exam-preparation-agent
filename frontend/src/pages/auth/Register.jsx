import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";

import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AuthLayout>
      <Card>
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account 🚀
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          Join PrepMind AI
        </p>

        <div className="space-y-5">
          <Input
            label="Full Name"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={(e) =>
              handleChange("confirmPassword", e.target.value)
            }
          />

          <Button fullWidth>
            Register
          </Button>

          <p className="text-center text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Login
            </Link>
          </p>
        </div>
      </Card>
    </AuthLayout>
  );
}