"use client";

import Link from "next/link";
import { useRouter } from "next/router"; // Corrected import for useRouter
import Image from "next/image"; // Import Image from next/image
import { HomeIcon, UserIcon, LogoutIcon } from "@heroicons/react/solid"; // Import icons
import { logoutUser } from "../../service/authService"; // Update the import path according to your project structure

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    alert("Logged out successfully");
    router.push("/login"); // Redirect to login page or any other page
  };

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 flex flex-col items-center">
        {/* Increased logo size */}
        <Image
          src="/logo.png" // Path to your logo image in the public folder
          alt="Logo"
          width={150} // Increased width and height for a larger logo
          height={150}
          className="mb-4"
        />
        <h2 className="text-lg font-bold">Profile</h2>
        <p>User Name</p>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 flex items-center space-x-2 hover:bg-gray-700">
            <HomeIcon className="h-5 w-5" /> {/* Icon for Dashboard */}
            <Link href="/dashboard">
              <a className="text-white">Dashboard</a>
            </Link>
          </li>
          <li className="p-4 flex items-center space-x-2 hover:bg-gray-700">
            <UserIcon className="h-5 w-5" /> {/* Icon for Profile */}
            <Link href="/profile">
              <a className="text-white">Profile</a>
            </Link>
          </li>
          <li className="p-4 flex items-center space-x-2 hover:bg-gray-700">
            <LogoutIcon className="h-5 w-5" /> {/* Icon for Logout */}
            <button onClick={handleLogout} className="text-white">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
