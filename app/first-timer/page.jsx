import React from "react";
import Image from "next/image";

const FirstTimer = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="relative h-[50vh]">
        <Image
          src="/assets/gym6.jpeg" 
          alt="First Timer"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome, First Timer!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Your fitness journey starts here. Explore our facilities and take
            your first step towards a healthier you.
          </p>
        </div>
      </div>
      <div className="py-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-8">
          What We Offer for First Timers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-500">
              Personalized Onboarding
            </h3>
            <p className="text-gray-400">
              Receive one-on-one guidance to get started on your fitness
              journey. Our trainers are here to support you every step of the
              way.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-500">
              Complimentary Classes
            </h3>
            <p className="text-gray-400">
              Join a free trial class and experience the best our gym has to
              offer. Yoga, HIIT, Pilates, and more are waiting for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTimer;
