'use client'
import React, { useState, useEffect } from "react";
import MemberOrNot from "./MemberOrNot";
import Link from "next/link";

const About = () => {

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="/assets/gymVideo.mp4"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
         FLEXOFY <span className="text-green-500">AI</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Transform your fitness journey with cutting-edge AI technology. Track
          progress, set goals, and achieve more with Flexofy AI.
        </p>
        <div className="flex gap-4">
          <Link className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-black font-semibold shadow-lg" href='/schedule'>
            Book Class
          </Link>
          <Link className="border border-green-500 px-6 py-3 rounded-full text-green-500 hover:text-black hover:bg-green-500 font-semibold shadow-lg" href='/memberships'>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
