/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Locations", path: "#locations" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="HVAC Company Logo"
              className="h-16 md:h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-gray-500 transition duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* Call Button */}
            <a
              href="tel:+18005551234"
              className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-500 transition"
            >
              <Phone size={20} />
              <span className="hidden md:inline">Call Now +18005551234</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+18005551234"
                className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-500 transition"
              >
                <Phone size={20} />
                <span>Call Now +18005551234</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
