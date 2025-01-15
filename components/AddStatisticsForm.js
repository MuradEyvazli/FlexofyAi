import React, { useState } from "react";
import { toast } from "react-toastify";

const AddStatisticsForm = ({ fetchStatistics }) => {
  const [date, setDate] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [workouts, setWorkouts] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Lütfen giriş yapın!");
      return;
    }

    try {
      const res = await fetch("/api/statistics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          date,
          caloriesBurned: parseInt(caloriesBurned, 10),
          workouts: parseInt(workouts, 10),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Veriler başarıyla kaydedildi!");
        setDate("");
        setCaloriesBurned("");
        setWorkouts("");
        fetchStatistics(); // İstatistikleri güncelle
      } else {
        toast.error(data.message || "Bir hata oluştu!");
      }
    } catch (error) {
      toast.error("Sunucu hatası!");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center p-6 bg-gray-900">
      {/* Sol Taraf - Fotoğraf */}
      <div className="hidden lg:block relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Motivasyon Resmi"
          className="w-full h-auto transition-transform duration-500 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-xl font-bold">Hedeflerine Odaklan!</p>
        </div>
      </div>

      {/* Ortadaki Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Antrenman Verilerini Kaydet
        </h2>
        <label className="block text-gray-400 mb-2">Tarih:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg mb-4 text-gray-300"
        />

        <label className="block text-gray-400 mb-2">Yakılan Kalori:</label>
        <input
          type="number"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          placeholder="Örn: 500"
          className="w-full p-3 bg-gray-700 rounded-lg mb-4 text-gray-300"
        />

        <label className="block text-gray-400 mb-2">Antrenman Sayısı:</label>
        <input
          type="number"
          value={workouts}
          onChange={(e) => setWorkouts(e.target.value)}
          placeholder="Örn: 3"
          className="w-full p-3 bg-gray-700 rounded-lg mb-4 text-gray-300"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600"
        >
          Kaydet
        </button>
      </form>

      {/* Sağ Taraf - Fotoğraf */}
      <div className="hidden lg:block relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://images.pexels.com/photos/6707697/pexels-photo-6707697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Motivasyon Resmi"
          className="w-full h-auto transition-transform duration-500 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-xl font-bold">Sağlıklı Kal!</p>
        </div>
      </div>
    </div>
  );
};

export default AddStatisticsForm;
