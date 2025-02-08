import React from "react";
import { MapPin } from "lucide-react";

const LocationCard = ({ city, areas, coverage }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
    <div className="flex items-center mb-4">
      <MapPin className="text-primary mr-3" size={32} />
      <h3 className="text-xl font-semibold text-gray-800">{city}</h3>
    </div>
    <div className="space-y-2">
      <p className="text-gray-600">
        <span className="font-medium">Covered Areas:</span> {areas}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Service Coverage:</span> {coverage}
      </p>
    </div>
  </div>
);

const ServiceLocations = () => {
  const locations = [
    {
      city: "Hamilton",
      areas: "Downtown, Ancaster, Dundas, Waterdown",
      coverage: "Residential & Commercial",
    },
    {
      city: "Burlington",
      areas: "Aldershot, Brant Hills, Shoreacres",
      coverage: "Comprehensive HVAC Services",
    },
    {
      city: "Oakville",
      areas: "Clearview, Glen Abbey, Bronte",
      coverage: "Full Installation & Repair",
    },
    {
      city: "Mississauga",
      areas: "City Centre, Streetsville, Port Credit",
      coverage: "Emergency & Routine Services",
    },
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Service Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide top-quality HVAC services across the Greater Hamilton
            Area and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              city={location.city}
              areas={location.areas}
              coverage={location.coverage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLocations;
