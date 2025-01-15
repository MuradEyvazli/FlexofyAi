"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dietPlans from "@/data/dietPlans";

const DietQuiz = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [dietPlan, setDietPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuizResult = async () => {
    if (!selectedOption) {
      alert('Lütfen bir seçenek seçin!');
      return;
    }

    const plans = dietPlans[selectedOption];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];

    setDietPlan(randomPlan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDietPlan(null);
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h3 className="text-xl font-bold text-green-400 mb-4">
        Hangi Diyet Sizin İçin Uygun?
      </h3>
      <div className="flex flex-col gap-4">
        {Object.keys(dietPlans).map((type) => (
          <label key={type} className="text-gray-300 flex items-center gap-2">
            <input
              type="radio"
              name="diet"
              value={type}
              checked={selectedOption === type}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="accent-green-500"
            />
            {type}
          </label>
        ))}
      </div>
      <button
        className="mt-6 px-4 py-2 rounded-full border border-green-500 text-green-500 font-semibold transition hover:bg-green-500 hover:text-black"
        onClick={handleQuizResult}
      >
        Sonuçları Göster
      </button>

      {isModalOpen && dietPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-gray-900 rounded-lg p-8 shadow-lg max-w-md w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h4 className="text-2xl font-bold text-green-400 mb-4">{dietPlan.plan}</h4>
            <p className="text-gray-300 mb-2">Kalori: {dietPlan.calories} kcal</p>
            <ul className="list-disc list-inside text-gray-400 mb-4">
              <li>Protein: {dietPlan.nutrients.protein}</li>
              <li>Karbonhidrat: {dietPlan.nutrients.carbs}</li>
              <li>Yağ: {dietPlan.nutrients.fat}</li>
            </ul>
            <p className="text-gray-300 italic mb-4">{dietPlan.tips}</p>
            <button
              className="px-4 py-2 rounded-full border border-green-500 text-green-500 font-semibold transition hover:bg-green-500 hover:text-black"
              onClick={closeModal}
            >
              Kapat
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default DietQuiz;
