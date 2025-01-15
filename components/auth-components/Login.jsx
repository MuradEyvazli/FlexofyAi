"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      toast.info("You are already logged in!", {
        position: "top-right",
        autoClose: 3000,
      });
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("🎉 Login successful!", {
        position: "top-right",
      });
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      toast.error(data.message, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <ToastContainer />
      <div className="relative md:w-1/2 w-full h-full">
        <Image
          src="/assets/gym2.jpeg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transition-transform duration-700 transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">
          <Link className="text-5xl font-bold mb-4" href={"/"}>
            Flexofy AI
          </Link>
          <p>Welcome back! Log in to continue.</p>
        </div>
      </div>
      <div className="md:w-1/2 p-10 w-full flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
        <div className="p-10 bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-4xl font-bold text-white mb-6">
            Welcome{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              Back
            </span>
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-400 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-400 font-semibold mb-2">
                Password
              </label>
              <div className="flex items-center bg-gray-700 pr-3 rounded-lg">
                <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
              </div>
              
              
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 p-3 rounded-lg text-white font-bold shadow-lg transform transition-transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-400 mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-teal-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
