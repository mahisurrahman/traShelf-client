import React, { useState } from "react";
import { Outlet } from "react-router";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  BarChart as AnalyticsIcon,
  Notifications as NotificationsIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";

function UserLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: <DashboardIcon />, label: "Dashboard", path: "/dashboard" },
    { icon: <PersonIcon />, label: "Profile", path: "/profile" },
    { icon: <AnalyticsIcon />, label: "Analytics", path: "/analytics" },
    {
      icon: <NotificationsIcon />,
      label: "Notifications",
      path: "/notifications",
    },
    { icon: <SettingsIcon />, label: "Settings", path: "/settings" },
    { icon: <LogoutIcon />, label: "Logout", path: "/logout" },
  ];

  return (
    <div className="flex w-full min-h-screen bg-teal-900">
      {/* Sidebar - Fixed position */}
      <aside
        className="h-screen transition-all duration-300 ease-in-out flex flex-col fixed top-0 left-0 z-10"
        style={{
          width: isExpanded ? "200px" : "64px",
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo area */}
        <div className="p-4 h-16 flex items-center justify-center border-b border-teal-700">
          {isExpanded ? (
            <h1 className="font-bold text-lg">LOGO</h1>
          ) : (
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
              L
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-4 overflow-visible">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center p-2 mx-2 rounded-lg hover:bg-teal-700 transition-all duration-200"
                >
                  <div className="text-teal-200">{item.icon}</div>
                  <span
                    className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "opacity-100 max-w-full"
                        : "opacity-0 max-w-0"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer area - profile or extra options */}
        <div className="py-4 border-t border-teal-700">
          <div className="flex items-center justify-center pl-2 hover:cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
              U
            </div>
            <div
              className={`ml-3 overflow-hidden transition-all duration-300 ${
                isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
              }`}
            >
              <div className="font-semibold">User</div>
              <div className="text-xs text-teal-300">Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Scrollable */}
      <main 
        className="flex-1 bg-black min-h-screen overflow-y-auto"
        style={{
          marginLeft: isExpanded ? "200px" : "64px",
          transition: "margin-left 0.3s ease-in-out"
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;