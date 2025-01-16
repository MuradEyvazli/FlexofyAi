"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (loading) {
    return null;
  }

  return (
    <header className="top-0 left-0 right-0 z-50 bg-white shadow-md ">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-gray-800">
          <Image
            src="/logos/male.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-3"
          />
          FLEXOFY <span className="text-green-500 ml-1">AI</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700">
          <Link
            href="/"
            className="hover:text-green-500 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/schedule"
            className="hover:text-green-500 transition duration-200"
          >
            Schedule
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-500 transition duration-200"
          >
            Contact
          </Link>
          {!isLoggedIn ? (
            <Link href="/login">
              <button className="border border-green-500 px-6 py-3 rounded-full text-green-500 hover:bg-green-500 hover:text-black font-bold transition duration-300">
                Get Started
              </button>
            </Link>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-lg border border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white transition"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 font-semibold hover:text-red-700 transition"
              >
                LogOut
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg border-t">
          <nav className="flex flex-col items-center gap-4 py-6">
            <Link
              href="/"
              className="hover:text-green-500 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/schedule"
              className="hover:text-green-500 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-500 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            {!isLoggedIn ? (
              <Link href="/login">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition"
                >
                  Get Started
                </button>
              </Link>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-lg border border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-red-500 font-semibold hover:text-red-700 transition"
                >
                  LogOut
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
