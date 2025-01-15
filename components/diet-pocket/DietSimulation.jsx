import { motion } from 'framer-motion';

const DietSimulation = ({ type }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h3 className="text-xl font-bold text-green-400 mb-4">
        {type} Diyeti Etkisi
      </h3>
      <p className="text-gray-300 mb-4">
        Bu diyet türünü 30 gün boyunca uyguladığınızda elde edilecek sonuçlar:
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>Vücut yağ oranında azalma</li>
        <li>Enerji seviyelerinde artış</li>
        <li>Kas kütlesi kazanımı</li>
      </ul>
    </motion.div>
  );
};

export default DietSimulation;
