import { motion } from 'framer-motion';

const RecommendedFoods = ({ foods = [] }) => {
  return (
    <motion.ul
      className="list-disc list-inside text-gray-400 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {foods.map((food, index) => (
        <li key={index} className="mb-2">
          {food}
        </li>
      ))}
    </motion.ul>
  );
};

export default RecommendedFoods;
