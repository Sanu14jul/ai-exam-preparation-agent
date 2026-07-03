import {
  FaHome,
  FaRobot,
  FaClipboardList,
  FaQuestionCircle,
  FaFileUpload,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const menu = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "AI Chat",
      path: "/chat",
      icon: <FaRobot />,
    },

    {
      name: "Study Planner",
      path: "/planner",
      icon: <FaClipboardList />,
    },

    {
      name: "Quiz",
      path: "/quiz",
      icon: <FaQuestionCircle />,
    },

    {
      name: "Upload PDF",
      path: "/upload",
      icon: <FaFileUpload />,
    },

    {
      name: "History",
      path: "/history",
      icon: <FaHistory />,
    },

  ];

  const logout = () => {

    localStorage.removeItem(
      "access_token"
    );

    window.location.href = "/login";

  };

  return (

    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-8">

        <h1 className="text-3xl font-bold">

          🎓 PrepMind AI

        </h1>

      </div>

      <nav className="flex-1 px-4">

        {menu.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-2 transition

            ${
              location.pathname === item.path

                ? "bg-indigo-600"

                : "hover:bg-slate-800"

            }
            `}
          >

            {item.icon}

            {item.name}

          </Link>

        ))}

      </nav>

      <button
        onClick={logout}
        className="m-5 bg-red-600 rounded-xl py-3 hover:bg-red-700 transition flex justify-center items-center gap-3"
      >

        <FaSignOutAlt />

        Logout

      </button>

    </aside>

  );
}