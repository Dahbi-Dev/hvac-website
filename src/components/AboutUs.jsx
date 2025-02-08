import React from "react";
import { CheckCircle2 } from "lucide-react";
import Stats from "./Stats";
import AboutImage from "../assets/images/about.png"; // Make sure to add this image

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Trusted HVAC Experts Serving Your Community
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We are a professional HVAC service provider dedicated to keeping
              your home comfortable in all seasons. With over 15 years of
              experience, our team of certified technicians brings expertise,
              reliability, and exceptional customer service to every job.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Comprehensive HVAC Installation and Repair",
                "Energy-Efficient Solutions",
                "Residential and Commercial Services",
                "24/7 Emergency Support",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats Component */}
            <Stats />
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={AboutImage}
              alt="HVAC Technicians at Work"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
