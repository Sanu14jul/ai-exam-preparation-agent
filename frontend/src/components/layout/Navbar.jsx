import {
  FaBell,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

export default function Navbar({
  toggleSidebar,
}) {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 md:px-8">

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={toggleSidebar}
          className="lg:hidden text-2xl hover:text-indigo-400 transition"
        >
          <FaBars />
        </button>

        <div>

          <h1 className="text-xl md:text-2xl font-bold">
            Dashboard
          </h1>

          <p className="hidden sm:block text-slate-400 text-sm">
            Welcome back 👋
          </p>

        </div>

      </div>

      <div className="flex items-center gap-5">

        <FaBell
          className="text-xl cursor-pointer hover:text-indigo-400 transition"
        />

        <FaUserCircle
          className="text-3xl cursor-pointer hover:text-indigo-400 transition"
        />

      </div>

    </header>
  );
}