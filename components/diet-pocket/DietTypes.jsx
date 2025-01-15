import DietSimulation from "@/components/diet-pocket/DietSimulation";
import DietQuiz from "@/components/diet-pocket/DietQuiz";

const DietTypes = () => {
  return (
    <div className=" text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 text-center mb-8">
        Diyet Türleri
      </h1>
      <div className="flex flex-col md:flex-col gap-8">
      <DietSimulation type="Kilo Verme" />
      <DietQuiz />
      </div>
      
    </div>
  );
};

export default DietTypes;
