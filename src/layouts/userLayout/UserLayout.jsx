import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  BarChart as AnalyticsIcon,
  Notifications as NotificationsIcon,
  ExitToApp as LogoutIcon,
  MenuBook as BooksIcon,
  Book as BorrowedIcon,
  LibraryBooks as ShelfIcon,
  PostAdd as InsertIcon,
  EventNote as UpcomingIcon,
  Cancel as CancelledIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
  Report,
  MoneyOffSharp,
} from "@mui/icons-material";
import {
  BadgeDollarSignIcon,
  DollarSign,
  DollarSignIcon,
  PieChart,
  Settings,
  UserRound,
} from "lucide-react";

function UserLayout() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleSubMenu = (id) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(id);
    }
  };

  const menuItems = [
    {
      id: "dashboard",
      icon: <DashboardIcon />,
      label: "Dashboard",
      path: "/user/dashboard",
    },
    {
      id: "profile",
      icon: <PersonIcon />,
      label: "Profile",
      path: "#",
      hasSubmenu: true,
      submenu: [
        {
          id: "personalInfo",
          icon: <UserRound />,
          label: "Personal Information",
          path: "/user/personalinfo",
        },
        {
          id: "readingStats",
          icon: <PieChart />,
          label: "Reading Statistics",
          path: "/user/stats",
        },
        {
          id: "changePassword",
          icon: <Settings />,
          label: "Change Password",
          path: "/user/changePassword",
        },
      ],
    },
    {
      id: "analytics",
      icon: <AnalyticsIcon />,
      label: "Analytics",
      path: "/user/analytics",
    },
    {
      id: "reports",
      icon: <Report />,
      label: "Reports",
      path: "/user/reports",
    },
    {
      id: "finance",
      icon: <DollarSign />,
      label: "Finance",
      path: "#",
      hasSubmenu: true,
      submenu: [
        {
          id: "invested",
          icon: <DollarSignIcon />,
          label: "Invested",
          path: "/user/invested",
        },
        {
          id: "profit",
          icon: <BadgeDollarSignIcon />,
          label: "Profit",
          path: "/user/profit",
        },
        {
          id: "loss",
          icon: <MoneyOffSharp />,
          label: "Loss",
          path: "/user/loss",
        },
      ],
    },
    {
      id: "books",
      icon: <BooksIcon />,
      label: "Books Collection",
      hasSubmenu: true,
      submenu: [
        {
          id: "borrowed",
          icon: <BorrowedIcon />,
          label: "Borrowed Books",
          path: "/user/books/borrowed",
        },
        {
          id: "own-shelf",
          icon: <ShelfIcon />,
          label: "Own Book Shelf",
          path: "/user/books/own-shelf",
        },
        {
          id: "insert",
          icon: <InsertIcon />,
          label: "Insert New Books",
          path: "/user/books/insert",
        },
        {
          id: "upcoming",
          icon: <UpcomingIcon />,
          label: "Upcoming Books",
          path: "/user/books/upcoming",
        },
        {
          id: "cancelled",
          icon: <CancelledIcon />,
          label: "Cancelled Books",
          path: "/user/books/cancelled",
        },
      ],
    },
  ];

  return (
    <div className="flex w-full min-h-screen bg-teal-900">
      <aside
        className="h-screen transition-all duration-300 ease-in-out flex flex-col fixed top-0 left-0 z-10 overflow-hidden"
        style={{ width: isExpanded ? "280px" : "64px" }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4 h-14 flex items-center justify-center border-b text-white border-teal-700 flex-shrink-0">
          {isExpanded ? (
            <h1 className="font-bold text-2xl">TraShelf</h1>
          ) : (
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
              TS
            </div>
          )}
        </div>
        <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.hasSubmenu ? (
                  <>
                    <div
                      className="flex items-center p-2 mx-2 rounded-lg text-white hover:bg-teal-700 transition-all duration-200 cursor-pointer"
                      onClick={() => toggleSubMenu(item.id)}
                    >
                      <div className="text-teal-200 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span
                        className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 flex-1 ${
                          isExpanded
                            ? "opacity-100 max-w-full"
                            : "opacity-0 max-w-0"
                        }`}
                      >
                        {item.label}
                      </span>
                      {isExpanded && (
                        <div className="text-teal-200 flex-shrink-0">
                          {openMenuId === item.id ? (
                            <ExpandMoreIcon />
                          ) : (
                            <ChevronRightIcon />
                          )}
                        </div>
                      )}
                    </div>
                    {openMenuId === item.id && (
                      <ul
                        className={`pl-6 space-y-1 ${
                          isExpanded ? "block" : "hidden"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link to={subItem.path}>
                              <p className="flex items-center p-2 mx-2 rounded-lg text-white hover:bg-teal-600 transition-all duration-200">
                                <span className="text-teal-200 flex-shrink-0">
                                  {subItem.icon}
                                </span>
                                <span
                                  className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                                    isExpanded
                                      ? "opacity-100 max-w-full"
                                      : "opacity-0 max-w-0"
                                  }`}
                                >
                                  {subItem.label}
                                </span>
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.path}>
                    <div className="flex items-center p-2 mx-2 rounded-lg text-white hover:bg-teal-700 transition-all duration-200">
                      <div className="text-teal-200 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span
                        className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? "opacity-100 max-w-full"
                            : "opacity-0 max-w-0"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="py-4 border-t border-teal-700 flex-shrink-0">
          <div className="flex items-center px-2 mb-4 hover:cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
              M
            </div>
            <div
              className={`ml-3 overflow-hidden transition-all duration-300 flex-1 ${
                isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
              }`}
            >
              <div className="font-semibold text-white">Reader</div>
              <div className="text-xs text-teal-300">
                Mohammed Mahisur Rahman
              </div>
            </div>
          </div>

          <Link to="/logout">
            <div className="border-t border-white flex items-center p-2 mx-2 text-white hover:bg-teal-800 transition-all duration-200">
              <div className="text-teal-200 flex-shrink-0">
                <LogoutIcon />
              </div>
              <span
                className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
                }`}
              >
                Logout
              </span>
            </div>
          </Link>
        </div>
      </aside>
      <main
        className="flex-1 bg-white text-black min-h-screen overflow-y-auto"
        style={{
          marginLeft: isExpanded ? "280px" : "64px",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
