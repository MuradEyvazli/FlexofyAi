'use client';

import React, { useState } from 'react';
import axios from 'axios';

const MuscleSelector = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [aiWorkouts, setAiWorkouts] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMuscleSelect = async (muscle) => {
    setSelectedMuscle(muscle);
    setAiWorkouts(null); // Önceki önerileri temizle
    setLoading(true);

    try {
      const response = await axios.post('/api/generate-workout', {
        muscleGroup: muscle,
      });

      setAiWorkouts(response.data.workouts);
    } catch (error) {
      console.error('Yapay zeka önerileri alınamadı:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-green-400 text-center mb-6">
        İnsan Anatomisi ve Kas Grupları
      </h2>
      {/* İnsan Anatomisi Görseli */}
      <div className="relative w-full max-w-4xl mx-auto h-96 bg-gray-700 rounded-lg overflow-hidden">
        <img
          src="https://cdna.artstation.com/p/assets/images/images/055/981/416/4k/yacine-brinis-male-human-muscles-3d-model-sculpted-by-yacine-brinis-001.jpg?1668176492"
          alt="İnsan Anatomisi"
          className="object-cover w-full h-full"
        />
        {/* Kas Grupları */}
        <div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center"
          onClick={() => handleMuscleSelect('Göğüs')}
        >
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded">
            Göğüs
          </button>
        </div>
        <div
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 text-center"
          onClick={() => handleMuscleSelect('Kol')}
        >
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded">
            Kol
          </button>
        </div>
        <div
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center"
          onClick={() => handleMuscleSelect('Bacak')}
        >
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded">
            Bacak
          </button>
        </div>
        <div
          className="absolute top-1/3 right-1/4 transform -translate-x-1/2 text-center"
          onClick={() => handleMuscleSelect('Sırt')}
        >
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded">
            Sırt
          </button>
        </div>
        <div
          className="absolute top-1/6 right-1/3 transform -translate-x-1/2 text-center"
          onClick={() => handleMuscleSelect('Omuz')}
        >
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded">
            Omuz
          </button>
        </div>
      </div>

      {/* Yapay Zeka Önerileri */}
      <div className="mt-6">
        {loading ? (
          <p className="text-center text-gray-400">Yapay zeka önerileri yükleniyor...</p>
        ) : aiWorkouts ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-400">
              Yapay Zeka Önerileri:
            </h3>
            <p className="mt-4 text-gray-300">{aiWorkouts}</p>
          </div>
        ) : selectedMuscle ? (
          <p className="text-center text-gray-400">
            Yapay zeka önerilerini görmek için bekleyin.
          </p>
        ) : (
          <p className="text-gray-400 text-center mt-4">
            Bir kas grubu seçmek için görsele tıklayın.
          </p>
        )}
      </div>
    </div>
  );
};

export default MuscleSelector;
