import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const MapSection = () => {
  // Coordinates for Hamilton, Ontario
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109565.3009436676!2d-80.21115510035649!3d26.741209739442475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d9e0891cf6919c9%3A0x23f1d46ec662784f!2sJ%26A%20MIRO%20CORP!5e1!3m2!1sen!2sma!4v1738970066851!5m2!1sen!2sma`;

  const locationDetails = [
    {
      icon: <MapPin className="text-primary mr-3" size={24} />,
      title: "Our Main Office",
      description: "123 HVAC Street, Hamilton, ON L8N 3T4",
    },
    {
      icon: <Navigation className="text-primary mr-3" size={24} />,
      title: "Service Area",
      description: "Hamilton, Burlington, Oakville, Mississauga",
    },
    {
      icon: <Clock className="text-primary mr-3" size={24} />,
      title: "Business Hours",
      description: "24/7 Emergency Support, Regular Hours: Mon-Fri 8am-6pm",
    },
  ];

  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Location & Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving the Greater Hamilton Area with Professional HVAC Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Container */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
            <iframe
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact & Service Information
            </h3>
            <div className="space-y-6">
              {locationDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start border-b pb-4 last:border-b-0"
                >
                  <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {detail.title}
                    </h4>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://maps.app.goo.gl/ah5oevEGus5no3Qk7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300 flex items-center space-x-2"
              >
                <Navigation size={20} />
                <span>Get Directions</span>
              </a>
              <a
                href="tel:+18005551234"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
