'use client';

import React, { useState, useEffect } from 'react';
import sampleDiets from '@/data/sampleDiets';
import DietCard from '../diet-pocket/DietCard';
import RecommendedFoods from '../diet-pocket/RecommendedFoods';
import DietTypeChart from '../diet-pocket/DietTypeChart';
import DietQuiz from '../diet-pocket/DietQuiz';
import DietTypes from '../diet-pocket/DietTypes';
import MotivationMessage from '../MotivationMessage';
import StatisticsPage from '../StatisticsPage';
import MuscleSelector from '../MuscleSelector';

const ITEMS_PER_PAGE = 12;

const DashboardHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredDiets, setFilteredDiets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    } else {
      fetchUserData(token);
    }
    setFilteredDiets(sampleDiets);
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await fetch('/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setUserData(data);
      } else {
        console.error(data.message);
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      window.location.href = '/login';
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = sampleDiets.filter((diet) =>
      diet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory) {
      filtered = filtered.filter((diet) => diet.type === selectedCategory);
    }

    setFilteredDiets(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredDiets.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => setCurrentPage(page);

  const currentItems = filteredDiets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleMuscleSelect = (muscle) => setSelectedMuscle(muscle);

  const calculateCalories = () => {
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);
    const numAge = parseInt(age, 10);

    if (
      numWeight < 20 ||
      numWeight > 170 ||
      numHeight < 90 ||
      numHeight > 250 ||
      numAge < 5 ||
      numAge > 100
    ) {
      setError('Lütfen geçerli bir yaş, boy ve kilo giriniz.');
      return;
    }

    const bmr = 10 * numWeight + 6.25 * numHeight - 5 * numAge + 5;
    const dailyCalories = bmr * parseFloat(activityLevel);
    setCalories(Math.round(dailyCalories));
    setError('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="loader border-t-4 border-green-400 w-12 h-12 rounded-full animate-spin mb-4"></div>
          <p className="text-lg">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  const categories = Array.from(new Set(sampleDiets.map((diet) => diet.type)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <header className="flex flex-col md:flex-col justify-center items-center py-6 bg-gray-800 shadow-md px-6">
        <div>
          <h2 className="text-center text-4xl font-bold text-green-400">Flexofy Dashboard</h2>
        </div>
        <p className="text-center text-gray-400 mt-2 max-w-2xl">
          Kişiselleştirilmiş fitness asistanınıza hoş geldiniz.
        </p>
        {userData && (
          <div className="mt-4 flex flex-col items-center text-right">
            <div className="text-center text-lg text-green-400 font-bold">
              Hoş Geldin, {userData.name}!
            </div>
            <p className="text-center text-gray-400">
              <span className="text-sm text-gray-500">Email:</span> {userData.email}
            </p>
            <p className="text-center text-sm text-gray-500">Rol: {userData.role}</p>
          </div>
        )}
      </header>

      <section className="p-6 bg-gray-900">
        <MotivationMessage />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MuscleSelector handleMuscleSelect={handleMuscleSelect} />

          {/* Kalori Hesaplama */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-400">Kalori Hesaplama</h2>
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="number"
                placeholder="Kilo (kg)"
                className="p-3 bg-gray-700 rounded-lg text-white focus:outline-none"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <input
                type="number"
                placeholder="Boy (cm)"
                className="p-3 bg-gray-700 rounded-lg text-white focus:outline-none"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <input
                type="number"
                placeholder="Yaş"
                className="p-3 bg-gray-700 rounded-lg text-white focus:outline-none"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="p-3 bg-gray-700 rounded-lg text-white focus:outline-none"
              >
                <option value="1.2">Hareketsiz</option>
                <option value="1.375">Hafif Aktif</option>
                <option value="1.55">Orta Aktif</option>
                <option value="1.725">Çok Aktif</option>
                <option value="1.9">Ekstra Aktif</option>
              </select>
              <button
                onClick={calculateCalories}
                className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600"
              >
                Hesapla
              </button>
              {error && <p className="text-red-400">{error}</p>}
              {calories && (
                <p className="text-green-400 font-bold">
                  Günlük Kalori İhtiyacı: {calories} kcal
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Kategoriler ve Arama */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg ${
                !selectedCategory ? 'bg-green-500' : 'bg-gray-700'
              } text-white`}
            >
              Tümü
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category ? 'bg-green-500' : 'bg-gray-700'
                } text-white`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Yemek ismine göre ara..."
            className="w-full p-3 bg-gray-800 rounded-lg text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Diyet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((diet, index) => (
            <DietCard
              key={index}
              image={diet.image}
              name={diet.name}
              calories={diet.calories}
              benefits={diet.benefits}
              recipeUrl={diet.recipeUrl}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-green-500 text-black'
                    : 'bg-gray-700 text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </section>

      <section>
        <StatisticsPage />
        <DietTypes />
        <RecommendedFoods />
        <DietTypeChart />
      </section>
    </div>
  );
};

export default DashboardHome;
