import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import Chat from "../pages/chat/Chat";
import Planner from "../pages/planner/Planner";
import Quiz from "../pages/quiz/Quiz";
import Profile from "../pages/profile/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/chat" element={<Chat />} />

      <Route path="/planner" element={<Planner />} />

      <Route path="/quiz" element={<Quiz />} />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}