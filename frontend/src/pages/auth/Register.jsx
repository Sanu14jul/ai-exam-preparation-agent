import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../layouts/AuthLayout";

import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { registerUser } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
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

  const handleRegister = async () => {
    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser(form);

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.detail ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
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
            label="Username"
            placeholder="Enter username"
            value={form.username}
            onChange={(e) =>
              handleChange("username", e.target.value)
            }
          />

          <Input
            label="Email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create password"
            value={form.password}
            onChange={(e) =>
              handleChange("password", e.target.value)
            }
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={(e) =>
              handleChange(
                "confirmPassword",
                e.target.value
              )
            }
          />

          <Button
            fullWidth
            loading={loading}
            onClick={handleRegister}
          >
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