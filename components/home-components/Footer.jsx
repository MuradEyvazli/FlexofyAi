import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
          <div className="flex flex-row justify-center items-center text-2xl font-bold tracking-widest">
         <Image src="/logos/male.png" alt="Logo" width={50} height={50} className="mr-3" />FLEXOFY <span className="text-green-500">AI</span>
        </div>
            <p className="text-gray-400 mt-4 max-w-sm">
              Revolutionizing your fitness journey with AI-powered solutions.
              Join us and transform your health today.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="hover:text-green-500 transition duration-300"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-500 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FLEXIFY AI. All rights reserved.
          </p>
          <ul className="flex gap-4 mt-4 md:mt-0 text-sm">
            <li>
              <a
                href="/privacy"
                className="hover:text-green-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-green-500 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:text-green-500 transition duration-300"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
