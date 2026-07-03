import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";

import Planner from "../pages/planner/Planner";

import Quiz from "../pages/quiz/Quiz";

import Chat from "../pages/chat/Chat";

import Upload from "../pages/upload/Upload";

import History from "../pages/history/History";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
        }
      />

      <Route
        path="/planner"
        element={
          <ProtectedRoute>

            <Planner />

          </ProtectedRoute>
        }
      />

      <Route
        path="/quiz"
        element={
          <ProtectedRoute>

            <Quiz />

          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>

            <Chat />

          </ProtectedRoute>
        }
      />

      <Route
        path="/upload"
        element={
          <ProtectedRoute>

            <Upload />

          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>

            <History />

          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/login" />}
      />

    </Routes>
  );
}