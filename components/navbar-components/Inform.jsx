import React from "react";
import Image from "next/image";
import Link from "next/link";

const Inform = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Image
          src="/assets/gym6.jpeg" // Hero görseli burada
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            TRANSFORM YOUR LIFE WITH <br />
            <span className="text-green-500">FLEXOFY AI</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Flexofy AI offers personalized fitness programs, expert trainers,
            and state-of-the-art facilities to help you achieve your goals.
          </p>
          <div className="flex gap-4">
            <Link href="/memberships" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-black font-bold transition duration-300">
              Try Flexofy
            </Link>
            <Link href="/first-timer" className="border border-green-500 px-6 py-3 rounded-full text-green-500 hover:bg-green-500 hover:text-black font-bold transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6 md:px-16 lg:px-32 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs, Expert Answers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">What is Flexofy AI?</h3>
            <p className="text-gray-400">
              Flexofy AI is a next-gen fitness solution powered by artificial
              intelligence, offering personalized training plans and real-time
              progress tracking.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">How can I join?</h3>
            <p className="text-gray-400">
              Joining is easy! Just sign up online or visit our facility. Our
              team will assist you in choosing the right plan for your goals.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Do you offer personal training?</h3>
            <p className="text-gray-400">
              No, we have not yet implemented personal training. However, we have a range of machines what can help you through
              one-on-one sessions tailored to your fitness journey.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">What facilities do you provide?</h3>
            <p className="text-gray-400">
              Our facilities include some machines that gonna help you durring your training sessions.
              You can ask them any questions if you have any doubts.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 py-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Life?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Join Flexofy AI today and take the first step towards a healthier and
          stronger you.
        </p>
        <Link href='/register' className="bg-white text-green-500 hover:bg-gray-300 px-8 py-4 rounded-full font-bold transition-transform transform hover:scale-105">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Inform;
