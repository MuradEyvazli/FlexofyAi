'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-md text-white">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="flex flex-row items-center text-2xl font-bold tracking-widest">
          <Image
            src="/logos/male.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          FLEXOFY <span className="text-green-500">AI</span>
        </div>

        {/* Menu for larger screens */}
        <nav className="hidden md:flex gap-8 text-lg">
          <Link href="/" className="hover:text-green-500 transition duration-300">
            About
          </Link>
          <Link href="/schedule" className="hover:text-green-500 transition duration-300">
            Schedule
          </Link>
          <Link href="/contact" className="hover:text-green-500 transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Buttons for larger screens */}
        <div className="hidden md:flex gap-4">
          {!isLoggedIn ? (
            <Link href="/login">
              <h2 className="group relative inline-block overflow-hidden rounded px-6 py-3 text-sm font-medium bg-green-500 text-gray-900 hover:text-black focus:outline-none focus:ring active:bg-white active:text-green-600 active:text-white">
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-200 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-200 group-hover:h-full"></span>
                Get Started
              </h2>
            </Link>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-full border border-green-500 text-green-500 font-semibold transition hover:bg-green-500 hover:text-white"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 font-semibold transition hover:text-white"
              >
                LogOut
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 absolute inset-x-0 top-16 z-10">
          <nav className="flex flex-col items-center gap-6 py-6 text-lg">
            <Link
              href="/"
              className="hover:text-green-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/schedule"
              className="hover:text-green-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="px-4 py-2 rounded-full bg-green-500 text-black font-semibold transition hover:bg-green-600"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded-full bg-green-500 text-black font-semibold transition hover:bg-green-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="font-semibold text-red-500 transition hover:text-yellow-200"
                >
                  Logout
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
