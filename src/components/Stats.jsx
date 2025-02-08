import React from "react";
import { Users, Trophy, HardHat } from "lucide-react";

const StatItem = ({ icon, number, label }) => (
  <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
    <div className="mb-3">{icon}</div>
    <h3 className="text-4xl font-bold text-primary mb-2">{number}</h3>
    <p className="text-gray-600 text-center">{label}</p>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: <Users size={48} className="text-blue-600" />,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Trophy size={48} className="text-yellow-400" />,
      number: "15+",
      label: "Years of Experience",
    },
    {
      icon: <HardHat size={48} className="text-yellow-600" />,
      number: "1000+",
      label: "Completed Projects",
    },
  ];

  return (
    <div className="flex justify-between space-x-6 mt-12">
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
