'use client'
import React, { useState } from "react";
import Image from "next/image";

const WorkoutOfDay = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/assets/gym7.jpeg" // Hero görseli burada
          alt="Workout of the Day"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Workout of the Day
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Today's training program is designed to challenge your strength,
            stamina, and mental focus.
          </p>
        </div>
      </div>

      {/* Workout Details */}
      <div className="py-16 px-6 md:px-16 lg:px-32 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8">MONDAY - 06/01/2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              For Time:
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Accumulate 6 minutes of a pull-up bar dead-hang hold.</li>
              <li>
                Each time you drop from the bar, complete 100 double-unders and
                30 V-ups.
              </li>
              <li>Post time to comments.</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-500 mt-8 mb-4">
              Stimulus and Strategy:
            </h3>
            <p className="text-gray-300">
              Today's workout tests your ability to stay focused under pressure.
              The goal is to finish within 20 minutes. Choose scaling options
              that allow you to maintain intensity throughout the workout.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <Image
              src="/assets/gym8.jpg" // Örnek görsel
              alt="Workout Details"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <a
              href="#"
              className="block mt-4 text-green-500 hover:underline font-semibold"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <button
            onClick={toggleComments}
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-bold text-black transition duration-300"
          >
            {commentsVisible ? "Hide Comments" : "View Comments"}
          </button>
          {commentsVisible && (
            <div className="mt-6 space-y-4">
              <p className="text-gray-300">
                <strong>Jonotan Ibrahim:</strong> Great workout today! Managed to finish
                in 18 minutes.
              </p>
              <p className="text-gray-300">
                <strong>Anna Cretans:</strong> Scaling options helped me a lot. V-ups
                are no joke!
              </p>
              <p className="text-gray-300">
                <strong>Robo Coach:</strong> Remember to focus on form and avoid
                rushing through the reps.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="flex flex-col items-center justify-center py-16 px-6 md:px-16 lg:px-32 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">
          Weekly Training Program
        </h2>
        <ul className="text-gray-300 space-y-4">
          <li>
            <strong>Tuesday:</strong> 5 Rounds for Time - 400m Run, 15 Deadlifts
            (135/95lbs), 20 Push-Ups
          </li>
          <li>
            <strong>Wednesday:</strong> AMRAP 20 - 10 Pull-Ups, 20 KB Swings
            (24/16kg), 30 Air Squats
          </li>
          <li>
            <strong>Thursday:</strong> Rest or Active Recovery (Yoga, Stretching)
          </li>
          <li>
            <strong>Friday:</strong> For Time - 50 Box Jumps, 50 Wall Balls, 50
            Sit-Ups
          </li>
          <li>
            <strong>Saturday:</strong> Partner WOD - 30 Min AMRAP: 200m Run, 10
            Burpees, 20 KB Snatches
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkoutOfDay;
