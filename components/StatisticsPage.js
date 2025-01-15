'use client';

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import AddStatisticsForm from "./AddStatisticsForm";

function parseJwt(token) {
  if (!token) return null;
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("JWT parsing error:", error);
    return null;
  }
}

const StatisticsPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [timeRange, setTimeRange] = useState("weekly");

  const fetchStatistics = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Kullanıcı oturum açmamış!");
        setLoading(false);
        return;
      }

      const decodedToken = parseJwt(token);
      const userId = decodedToken?.userId;

      if (!userId) {
        setError("Kullanıcı ID'si alınamadı!");
        setLoading(false);
        return;
      }

      const res = await fetch(`/api/statistics?userId=${userId}&timeRange=${timeRange}`);
      const data = await res.json();

      if (res.ok) {
        setStats(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, [timeRange]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div className="text-center">
          <div className="loader border-t-4 border-green-400 w-12 h-12 rounded-full animate-spin mb-4"></div>
          <p className="text-lg">Veriler Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  const { totalCalories, totalWorkouts, dailyData } = stats;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-3">
      <h1 className="text-4xl font-bold text-center text-green-400 mb-2">
        İstatistikler
      </h1>

      {/* Yeni veri ekleme formu */}
      <AddStatisticsForm fetchStatistics={fetchStatistics} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-400">Toplam Kalori</h2>
          <p className="text-gray-400 text-4xl font-bold mt-4">{totalCalories} kcal</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-400">Toplam Antrenman</h2>
          <p className="text-gray-400 text-4xl font-bold mt-4">{totalWorkouts}</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 font-semibold mb-2">Zaman Aralığı:</label>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-3 bg-gray-800 rounded-lg text-gray-400"
        >
          <option value="weekly">Haftalık</option>
          <option value="monthly">Aylık</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="date" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calories" stroke="#57e90e" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="text-2xl font-bold text-green-400 mt-8">Günlük Antrenman</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="date" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Legend />
          <Bar dataKey="workouts" fill="#57e90e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsPage;
