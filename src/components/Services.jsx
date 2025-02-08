import React from "react";
import {
  Snowflake,
  Flame,
  Wind,
  Thermometer,
  Settings,
  Shield,
} from "lucide-react";

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Snowflake size={48} className="text-blue-500" />,
      title: "Air Conditioning",
      description:
        "Expert AC installation, repair, and maintenance for optimal cooling efficiency.",
    },
    {
      icon: <Flame size={48} className="text-red-500" />,
      title: "Heating Services",
      description:
        "Comprehensive heating solutions to keep you warm during cold months.",
    },
    {
      icon: <Wind size={48} className="text-green-500" />,
      title: "Ventilation",
      description:
        "Improve indoor air quality with our advanced ventilation systems.",
    },
    {
      icon: <Thermometer size={48} className="text-purple-500" />,
      title: "Temperature Control",
      description:
        "Smart thermostat installation and climate control solutions.",
    },
    {
      icon: <Settings size={48} className="text-gray-500" />,
      title: "System Maintenance",
      description:
        "Preventative maintenance to ensure long-lasting HVAC performance.",
    },
    {
      icon: <Shield size={48} className="text-yellow-500" />,
      title: "Emergency Repairs",
      description:
        "24/7 emergency HVAC repair services when you need them most.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Professional HVAC Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive heating, cooling, and ventilation solutions tailored
            to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
