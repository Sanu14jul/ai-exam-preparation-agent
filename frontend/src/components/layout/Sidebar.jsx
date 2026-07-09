import {
  FaHome,
  FaRobot,
  FaClipboardList,
  FaQuestionCircle,
  FaFileUpload,
  FaHistory,
  FaSignOutAlt,
  FaPlus,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

export default function Sidebar({
  closeSidebar,
}) {

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

    {
      name: "Profile",
      path: "/profile",
      icon: <FaUserCircle />,
    },

  ];

  const recentChats = [

    "Explain Ashoka",

    "Modern History",

    "UPSC Study Plan",

    "Polity Quiz",

  ];

  const logout = () => {

    localStorage.removeItem(
      "access_token"
    );

    window.location.href = "/login";

  };

  return (

    <aside className="w-80 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Mobile Close */}

      <div className="flex lg:hidden justify-end p-4">

        <button
          onClick={closeSidebar}
          className="text-2xl hover:text-red-400"
        >
          <FaTimes />
        </button>

      </div>

      {/* Logo */}

      <div className="px-6 pb-6">

        <h1 className="text-3xl font-bold">

          🎓 PrepMind AI

        </h1>

        <p className="text-slate-400 text-sm mt-1">

          AI Exam Preparation

        </p>

      </div>

      {/* New Chat */}

      <div className="px-5">

        <Link
          to="/chat"
          onClick={closeSidebar}
          className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl py-3 font-semibold transition"
        >

          <FaPlus />

          New Chat

        </Link>

      </div>

      {/* Recent Chats */}

      <div className="px-5 mt-8">

        <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">

          Recent Chats

        </p>

        <div className="space-y-2">

          {recentChats.map((chat, index) => (

            <button
              key={index}
              className="w-full text-left bg-slate-900 hover:bg-slate-800 rounded-xl px-4 py-3 text-sm truncate transition"
            >

              💬 {chat}

            </button>

          ))}

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto mt-8 px-4">

        <p className="text-xs uppercase tracking-wider text-slate-500 mb-3 px-2">

          Navigation

        </p>

        {menu.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            onClick={closeSidebar}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-2 transition

            ${
              location.pathname === item.path

                ? "bg-indigo-600 text-white"

                : "hover:bg-slate-800 text-slate-300"

            }
            `}
          >

            {item.icon}

            {item.name}

          </Link>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <div className="bg-slate-900 rounded-xl p-4 mb-4">

          <p className="font-semibold">

            PrepMind AI

          </p>

          <p className="text-xs text-slate-400">

            Version 1.0 Beta

          </p>

        </div>

        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-3 flex justify-center items-center gap-3 transition"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>

  );

}