"use client";

import Link from "next/link";
import { useState } from "react";
import { logoutUser } from "../../service/authService";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  HomeIcon,
  UserIcon,
  LogoutIcon,
  MenuIcon,
} from "@heroicons/react/solid";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    alert("Logged out successfully");
    router.push("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      {/* Menu button for mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden block p-3 fixed top-4 left-4 z-50 bg-gray-700 text-white rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed inset-y-0 left-0 bg-gray-900 text-white flex flex-col transition-transform duration-300 ease-in-out ${
          isSidebarCollapsed ? "w-20" : "w-72"
        } border-r border-gray-700`}
      >
        <button
          onClick={toggleCollapse}
          className="hidden md:block p-3 text-white hover:bg-gray-700 rounded-full transition-colors duration-200"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <div
          className={`p-4 flex flex-col items-center transition-opacity duration-300 ease-in-out ${
            isSidebarCollapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={isSidebarCollapsed ? 50 : 150}
            height={isSidebarCollapsed ? 50 : 200}
            className="mb-4 rounded-full border-2 border-white"
          />
          {!isSidebarCollapsed && (
            <>
              <h2 className="text-lg font-semibold text-gray-300">Profile</h2>
              <p className="text-sm text-gray-400">User Name</p>
            </>
          )}
        </div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 flex items-center space-x-4 hover:bg-gray-700 rounded-lg transition-colors duration-200">
              <HomeIcon className="h-5 w-5 text-gray-300" />
              {!isSidebarCollapsed && (
                <Link href="/dashboard" className="text-white font-medium">
                  Dashboard
                </Link>
              )}
            </li>
            <li className="p-4 flex items-center space-x-4 hover:bg-gray-700 rounded-lg transition-colors duration-200">
              <UserIcon className="h-5 w-5 text-gray-300" />
              {!isSidebarCollapsed && (
                <Link href="/profile" className="text-white font-medium">
                  Profile
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <div className="p-4 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 hover:bg-gray-700 p-3 rounded-lg text-white font-medium transition-colors duration-200"
          >
            <LogoutIcon className="h-5 w-5" />
            {!isSidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
