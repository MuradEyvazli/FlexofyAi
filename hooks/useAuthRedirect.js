"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAuthRedirect(redirectTo = "/login") {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push(redirectTo); // Giriş yapılmadıysa login sayfasına yönlendir
    }
  }, [router, redirectTo]);
}
