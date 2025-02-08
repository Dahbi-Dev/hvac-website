import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <Facebook />, url: "#" },
    { icon: <Twitter />, url: "#" },
    { icon: <Instagram />, url: "#" },
    { icon: <Linkedin />, url: "#" },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "#home" },
        { name: "About Us", url: "#about" },
        { name: "Services", url: "#services" },
        { name: "Locations", url: "#locations" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "AC Installation", url: "#services" },
        { name: "Heating Repair", url: "#services" },
        { name: "Maintenance", url: "#services" },
        { name: "Emergency Support", url: "#services" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", url: "#contact" },
        { name: "Get a Quote", url: "#contact" },
        { name: "Blog", url: "#blog" },
        { name: "FAQs", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={Logo}
              alt="HVAC Company Logo"
              className="h-12 mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Providing top-quality HVAC services to keep your home comfortable
              all year round.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="text-gray-400 space-y-2">
              <p>123 HVAC Street</p>
              <p>Hamilton, ON L8N 3T4</p>
              <p>Phone: (800) 555-HVAC</p>
              <p>Email: support@hvaccompany.com</p>
              <p>Hours: 24/7 Emergency Support</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} HVAC Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
