import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      <div>

        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400 text-sm">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-6">

        <FaBell
          className="text-xl cursor-pointer hover:text-indigo-400"
        />

        <FaUserCircle
          className="text-3xl cursor-pointer"
        />

      </div>

    </header>
  );
}