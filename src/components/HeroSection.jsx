import React, { useState, useEffect } from "react";
import { ChevronRight, Phone } from "lucide-react";

// Import hero images
import HeroImage1 from "../assets/images/hero1.png";
import HeroImage2 from "../assets/images/hero2.png";
import HeroImage3 from "../assets/images/hero3.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [HeroImage1, HeroImage2, HeroImage3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Professional HVAC Services You Can Trust
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Keeping Your Home Comfortable Year-Round with Expert Heating,
          Ventilation, and Air Conditioning Solutions
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-500 text-white px-8 py-4 rounded-full 
            flex items-center space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span>Get a Free Quote</span>
            <ChevronRight />
          </a>
          <a
            href="tel:+18005551234"
            className="bg-green-700 hover:bg-green-500 text-white px-8 py-4 rounded-full 
            flex items-center space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span>Call Us Now</span>
            <Phone />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
