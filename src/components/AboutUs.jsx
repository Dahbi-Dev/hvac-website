/* eslint-disable no-unused-vars */
import React from "react";
import { CheckCircle2 } from "lucide-react";
import Stats from "./Stats";
import AboutImage from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 md:mb-6">
              Trusted HVAC Experts Serving Your Community
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              We are a professional HVAC service provider dedicated to keeping
              your home comfortable in all seasons. With over 15 years of
              experience, our team of certified technicians brings expertise,
              reliability, and exceptional customer service to every job.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "Comprehensive HVAC Installation and Repair",
                "Energy-Efficient Solutions",
                "Residential and Commercial Services",
                "24/7 Emergency Support",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 md:space-x-3"
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Component */}
            <Stats />
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg mb-6 md:mb-0">
            <img
              src={AboutImage}
              alt="HVAC Technicians at Work"
              className="w-full h-auto md:h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
