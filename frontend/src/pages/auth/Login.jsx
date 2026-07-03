import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../layouts/AuthLayout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { loginUser } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields");

      return;
    }

    try {
      setLoading(true);

      const data = await loginUser(email, password);

      localStorage.setItem(
        "access_token",
        data.access_token
      );

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.detail ||
          "Invalid Credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card>
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          Login to continue
        </p>

        <div className="space-y-5">
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button
            fullWidth
            loading={loading}
            onClick={handleLogin}
          >
            Sign In
          </Button>

          <p className="text-center text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Register
            </Link>
          </p>
        </div>
      </Card>
    </AuthLayout>
  );
}