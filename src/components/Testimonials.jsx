import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ name, location, quote, rating }) => {
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${index < count ? "text-yellow-400" : "text-gray-300"}`}
        fill={index < count ? "#fbbf24" : "none"}
      />
    ));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="flex mb-4">
        <Quote className="text-primary mr-2 opacity-50" size={32} />
        <p className="text-gray-600 italic">{quote}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <div className="flex">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lisa Jackson",
      location: "Oakville, ON",
      quote:
        "The Tech was so wonderful to work with.  He explained thing very clearly and completed the job in reasonable time for a fair price.   For sure this is my new AC Guy!!!!",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      location: "Burlington, ON",
      quote:
        "Their maintenance plan has saved us money and kept our home comfortable all year round.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      location: "Hamilton, ON",
      quote:
        "Responsive, knowledgeable, and fair pricing. I highly recommend their services to everyone.",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied customers who trust us for their HVAC needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
