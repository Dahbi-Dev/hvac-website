import React from "react";
import { Calendar } from "lucide-react";

// Import blog images
import BlogImage1 from "../assets/images/blog1.png";
import BlogImage2 from "../assets/images/blog2.png";
import BlogImage3 from "../assets/images/blog3.png";

const BlogPost = ({ image, date, title, description }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <div className="flex items-center text-gray-500 mb-3">
        <Calendar size={20} className="mr-2" />
        <span className="text-sm">{date}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-primary hover:underline">
        Read More
      </a>
    </div>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      image: BlogImage1,
      date: "January 15, 2024",
      title: "Top 5 Energy-Saving HVAC Tips for Winter",
      description:
        "Discover how to keep your home warm and energy-efficient during the coldest months of the year.",
    },
    {
      image: BlogImage2,
      date: "February 20, 2024",
      title: "Signs Your HVAC System Needs Maintenance",
      description:
        "Learn to recognize early warning signs that indicate your heating and cooling system requires professional attention.",
    },
    {
      image: BlogImage3,
      date: "March 10, 2024",
      title: "Choosing the Right HVAC System for Your Home",
      description:
        "A comprehensive guide to selecting the most suitable HVAC system based on your home's specific needs.",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            HVAC Insights & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles on heating, cooling, and home
            comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
