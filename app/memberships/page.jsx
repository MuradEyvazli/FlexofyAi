import React from "react";
import Image from "next/image";

const Memberships = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$29/month",
      features: ["Access to all gym equipment", "1 free class per week"],
    },
    {
      name: "Pro Plan",
      price: "$49/month",
      features: [
        "Unlimited classes",
        "Access to all gym equipment",
        "1 personal training session per month",
      ],
    },
    {
      name: "Elite Plan",
      price: "$79/month",
      features: [
        "Unlimited classes",
        "Priority booking",
        "Weekly personal training sessions",
        "Exclusive lounge access",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="relative h-[50vh]">
        <Image
          src="/assets/gym5.jpg"
          alt="Memberships"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Membership Plans
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Choose the plan that best suits your fitness goals.
          </p>
        </div>
      </div>
      <div className="py-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-12">
          Select Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-green-500 mb-4">
                {plan.name}
              </h3>
              <p className="text-xl font-bold text-white">{plan.price}</p>
              <ul className="text-gray-400 mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full text-black font-semibold transition duration-300">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memberships;
