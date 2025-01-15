'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Mesaj başarıyla gönderildi!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error(data.error || 'Mesaj gönderilemedi.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Bir hata oluştu.');
    }
  };

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/assets/gym4.jpeg" // Add your background image here
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch with Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Have questions? We'd love to hear from you. Reach out using the form below or through our contact details.
          </p>
          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-black font-semibold shadow-lg mt-10"
          >
            Go Back
          </Link>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-green-400 mb-6">Contact Us</h1>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Your Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-700 rounded-lg text-gray-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Your Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-700 rounded-lg text-gray-300"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Your Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-gray-700 rounded-lg text-gray-300"
                  rows="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className='mt-32'>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-6">
              You can also reach out through the following contact methods:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 text-black w-10 h-10 flex items-center justify-center rounded-full">📍</div>
                <p className="text-gray-300">Azerbaijan, Baku - Flexify Center</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-500 text-black w-10 h-10 flex items-center justify-center rounded-full">📞</div>
                <p className="text-gray-300">+123 456 7890</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-500 text-black w-10 h-10 flex items-center justify-center rounded-full">✉️</div>
                <p className="text-gray-300">support@flexofy.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-500 text-black w-10 h-10 flex items-center justify-center rounded-full">🌐</div>
                <p className="text-gray-300">www.flexofyfake.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[50vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30412.29262013581!2d49.82560901638708!3d40.409261699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4f264e408d%3A0x55506d7aa5a79c7!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1614244344210!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
