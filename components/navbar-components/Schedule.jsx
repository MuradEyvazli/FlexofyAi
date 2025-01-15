import Image from "next/image";
import Link from "next/link";
import React from "react";

const Schedule = () => {
  const events = [
    { time: "6:00 AM", activity: "Morning Yoga", instructor: "Emily" },
    { time: "8:00 AM", activity: "HIIT Training", instructor: "John" },
    { time: "10:00 AM", activity: "Pilates", instructor: "Sophia" },
    { time: "1:00 PM", activity: "Zumba", instructor: "Michael" },
    { time: "4:00 PM", activity: "Strength Training", instructor: "Chris" },
    { time: "6:00 PM", activity: "Cardio Blast", instructor: "Sarah" },
    { time: "8:00 PM", activity: "Meditation", instructor: "Anna" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/assets/gym4.jpeg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Schedule</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Stay on track with your fitness journey. Check out our schedule and
            plan your week effectively!
          </p>
          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-black font-semibold shadow-lg mt-10"
          >
            Go Back
          </Link>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="py-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-12">Today's Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-green-500 mb-2">
                {event.time}
              </h3>
              <p className="text-xl font-bold">{event.activity}</p>
              <p className="text-gray-400 mt-2">Instructor: {event.instructor}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-500 py-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join Your Next Class?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Book your slot now and stay committed to your fitness goals. We’re
          here to help you every step of the way.
        </p>
        <button className="bg-white text-green-500 hover:bg-gray-200 px-8 py-4 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105">
          View All Classes
        </button>
      </div>
    </div>
  );
};

export default Schedule;
