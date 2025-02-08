import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    serviceNeeds: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, error: true });
      return;
    }

    // Simulate form submission
    try {
      // Here you would typically send the form data to a backend service
      console.log("Form submitted:", formData);

      // Reset form and show success message
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        serviceNeeds: "",
        message: "",
      });
      setSubmitStatus({ success: true, error: false });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitStatus({ success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" size={32} />
                <div>
                  <h4 className="font-semibold">Our Address</h4>
                  <p className="text-gray-600">
                    123 HVAC Street, Hamilton, ON L8N 3T4
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" size={32} />
                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p className="text-gray-600">(800) 555-HVAC</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" size={32} />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">support@hvaccompany.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Hours of Service</h4>
              <p className="text-gray-600">24/7 Emergency Support</p>
              <p className="text-gray-600">Regular Hours: Mon-Fri 8am-6pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Request a Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitStatus.success && (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  Your message has been sent successfully!
                </div>
              )}
              {submitStatus.error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  Please fill out all required fields.
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <select
                name="serviceNeeds"
                value={formData.serviceNeeds}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Service Needs</option>
                <option value="ac-installation">AC Installation</option>
                <option value="heating-repair">Heating Repair</option>
                <option value="maintenance">System Maintenance</option>
                <option value="emergency">Emergency Service</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe Your Service Needs*"
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
