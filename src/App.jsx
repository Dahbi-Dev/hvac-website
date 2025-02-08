import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import OperationalProcess from "./components/OperationalProcess";
import Testimonials from "./components/Testimonials";
import ServiceLocations from "./components/ServiceLocations";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MapSection from "./components/MapSection";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <Services />
                <OperationalProcess />
                <Testimonials />
                <ServiceLocations />
                <Blog />
                <Contact />
                <MapSection />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
