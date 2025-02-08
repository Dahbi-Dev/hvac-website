/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ChevronUp, Sun, Moon, MessageCircle } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme");

    // If no saved theme, check system preference
    if (!savedTheme) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return savedTheme === "dark";
  });

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Save to local storage
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Apply to document
    applyTheme(newTheme);
  };

  // Apply theme to entire application
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");

      // Comprehensive color mappings
      const colorMappings = {
        // Background colors
        "bg-white": "bg-gray-900",
        "bg-gray-50": "bg-gray-800",
        "bg-gray-100": "bg-gray-700",

        // Text colors
        "text-gray-800": "text-gray-100",
        "text-gray-700": "text-gray-200",
        "text-gray-600": "text-gray-300",
        "text-gray-500": "text-gray-400",

        // Form and input styles
        // eslint-disable-next-line no-dupe-keys
        "bg-gray-100": "bg-gray-700",
        border: "border-gray-600",
        "focus:border-blue-500": "focus:border-blue-400",
        "focus:ring-blue-500": "focus:ring-blue-400",

        // Hover text colors
        "hover:text-gray-500": "hover:text-gray-300",

        // Primary and secondary colors
        "text-primary": "text-blue-400",
        "text-secondary": "text-green-400",

        // Alert colors
        "bg-green-100": "bg-green-800",
        "border-green-400": "border-green-700",
        "text-green-700": "text-green-200",

        "bg-red-100": "bg-red-800",
        "border-red-400": "border-red-700",
        "text-red-700": "text-red-200",
      };

      // Replace colors on all elements
      Object.entries(colorMappings).forEach(([lightClass, darkClass]) => {
        const elements = document.getElementsByClassName(lightClass);
        Array.from(elements).forEach((el) => {
          el.classList.remove(lightClass);
          el.classList.add(darkClass);
        });
      });

      // Special handling for form elements
      const formElements = document.querySelectorAll("input, select, textarea");
      formElements.forEach((el) => {
        el.style.backgroundColor = "#2d3748"; // Dark background for inputs
        el.style.color = "#e2e8f0"; // Light text for inputs
        el.style.borderColor = "#4a5568"; // Dark border

        // Placeholder color
        el.style.setProperty("--placeholder-color", "#a0aec0");
        el.addEventListener("focus", () => {
          el.style.borderColor = "#4299e1"; // Blue focus border
        });
        el.addEventListener("blur", () => {
          el.style.borderColor = "#4a5568"; // Reset border
        });
      });

      // Add custom style for placeholders
      const styleTag = document.createElement("style");
      styleTag.textContent = `
        input::placeholder, textarea::placeholder, select::placeholder {
          color: #a0aec0 !important;
        }
      `;
      document.head.appendChild(styleTag);
    } else {
      document.documentElement.classList.remove("dark");

      // Revert color mappings
      const colorMappings = {
        // Background colors
        "bg-gray-900": "bg-white",
        "bg-gray-800": "bg-gray-50",
        "bg-gray-700": "bg-gray-100",

        // Text colors
        "text-gray-100": "text-gray-800",
        "text-gray-200": "text-gray-700",
        "text-gray-300": "text-gray-600",
        "text-gray-400": "text-gray-500",

        // Form and input styles
        "bg-gray-700": "bg-gray-100",
        "border-gray-600": "border",
        "focus:border-blue-400": "focus:border-blue-500",
        "focus:ring-blue-400": "focus:ring-blue-500",

        // Hover text colors
        "hover:text-gray-300": "hover:text-gray-500",

        // Primary and secondary colors
        "text-blue-400": "text-primary",
        "text-green-400": "text-secondary",

        // Alert colors
        "bg-green-800": "bg-green-100",
        "border-green-700": "border-green-400",
        "text-green-200": "text-green-700",

        "bg-red-800": "bg-red-100",
        "border-red-700": "border-red-400",
        "text-red-200": "text-red-700",
      };

      // Revert colors on all elements
      Object.entries(colorMappings).forEach(([darkClass, lightClass]) => {
        const elements = document.getElementsByClassName(darkClass);
        Array.from(elements).forEach((el) => {
          el.classList.remove(darkClass);
          el.classList.add(lightClass);
        });
      });

      // Reset form elements
      const formElements = document.querySelectorAll("input, select, textarea");
      formElements.forEach((el) => {
        el.style.backgroundColor = ""; // Reset background
        el.style.color = ""; // Reset text color
        el.style.borderColor = ""; // Reset border
      });

      // Remove placeholder style tag
      const styleTag = document.head.querySelector("style[data-placeholder]");
      if (styleTag) styleTag.remove();
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Initial theme setup
    applyTheme(isDarkMode);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        zIndex: 50,
      }}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+18005551234"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
        style={{
          backgroundColor: "#25D366", // WhatsApp green
          color: "white",
          padding: "0.75rem",
          borderRadius: "9999px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          transition: "background-color 0.3s, transform 0.2s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "hover:scale-105",
        }}
      >
        <MessageCircle size={24} />
      </a>

      {/* Dark Mode Toggle */}
      <button
        className="cursor-pointer"
        onClick={toggleDarkMode}
        style={{
          backgroundColor: isDarkMode ? "#4a5568" : "#e2e8f0",
          color: isDarkMode ? "white" : "black",
          padding: "0.75rem",
          borderRadius: "9999px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          className="cursor-pointer"
          onClick={scrollToTop}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.75rem",
            borderRadius: "9999px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transition: "background-color 0.3s",
            animation: "bounce 1s infinite",
          }}
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Add global styles for dark mode */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
      `}</style>
    </div>
  );
};

export default ScrollToTop;
