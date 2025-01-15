'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DietCard = ({ image, name, calories, benefits, recipeUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 bg-transparent rounded-lg shadow-lg overflow-hidden perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Ön Yüz */}
      <motion.div
  className={`absolute w-full h-full backface-hidden bg-gray-800 flex flex-col items-center justify-center`}
  initial={{ rotateY: 0 }}
  animate={{ rotateY: isFlipped ? 180 : 0 }}
  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }} // Daha yavaş ve profesyonel animasyon eğrisi
  style={{
    transformStyle: 'preserve-3d',
    boxShadow: isFlipped ? 'none' : '0 4px 15px rgba(0, 0, 0, 0.2)',
  }}
>
  <img src={image} alt={name} className="w-full h-40 object-cover" />
  <div className="p-4 flex flex-col items-center">
    <h3 className="text-xl font-bold text-green-400">{name}</h3>
    <p className="text-gray-400 mt-2">Kalori: {calories} kcal</p>
    <p className="text-gray-400 mt-2">{benefits}</p>
  </div>
</motion.div>


      {/* Arka Yüz */}
      <motion.div
        className={`absolute w-full h-full backface-hidden`}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 360 : 180 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          background: 'rgba(0, 0, 0, 0.8)', // Şeffaf arka plan
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex flex-col justify-center items-center text-white h-full p-6">
          <h3 className="text-xl font-bold mb-4">{name} Tarifi</h3>
          <p className="text-center text-gray-300 mb-4">
            Bu tarif için detayları görmek için aşağıdaki bağlantıya tıklayın.
          </p>
          <a
            href={recipeUrl}
            className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg"
          >
            Tarif Detayları
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DietCard;
