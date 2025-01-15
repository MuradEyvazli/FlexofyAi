import { motion } from "framer-motion";

const DietTypeChart = ({ title, data = [] }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-green-400 mb-4">{title}</h3>
      <div className="flex gap-4 items-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="h-24 w-6 bg-green-500"
              style={{ height: `${item.percentage}%` }}
            ></div>
            <p className="text-gray-300 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DietTypeChart;
