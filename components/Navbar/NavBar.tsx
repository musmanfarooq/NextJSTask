"use client";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/dashboard"
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                pathname === "/dashboard" ? "bg-gray-700" : ""
              }`}
            >
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/charts"
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                pathname === "/charts" ? "bg-gray-700" : ""
              }`}
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Charts</span>
            </a>
          </li>
          <li>
            <a
              href="/api/auth/signout"
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group `}
              onClick={handleSignOut}
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
