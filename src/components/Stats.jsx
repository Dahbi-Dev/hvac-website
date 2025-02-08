/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Users, Trophy, HardHat } from "lucide-react";

const StatItem = ({ icon, number, label }) => (
  <div className="flex flex-col items-center bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full">
    <div className="mb-2 md:mb-3">{icon}</div>
    <h3 className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
      {number}
    </h3>
    <p className="text-sm md:text-base text-gray-600 text-center">{label}</p>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: <Users size={36} md:size={48} className="text-blue-600" />,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Trophy size={36} md:size={48} className="text-yellow-400" />,
      number: "15+",
      label: "Years of Experience",
    },
    {
      icon: <HardHat size={36} md:size={48} className="text-yellow-600" />,
      number: "1000+",
      label: "Completed Projects",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-6 mt-6 md:mt-12">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default Stats;
