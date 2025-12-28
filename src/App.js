import React from "react";

// --- STYLE IMPORTS ---
import "./profileSection/profileSection.css"; // Global CSS for fonts/animations

// --- COMPONENT IMPORTS ---
import Navbar from "./NavBar";
import FlavourFusion from "./profileSection/profileSection"; // Your Hero Section
import Dashboard from "./overviewSection/overView"; // Your Products/Offers Section
import Recommend from "./Recommendationsection/Recommend"; // Your Recommendations
import AboutSection from "./Testimonial/Testi"; // Your History/Team (Renamed from Testimonials)
import ReviewSection from "./ReviewSection/Mainreview"; // Your Reviews
import Lightbox from "./GallerySection/Gallery"; // Your Gallery
import Footer from "./Footer";
import FloatingParticles from "./MenuList/mainList"; // The background animation

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 font-sans relative overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section id="home">
          <FlavourFusion />
        </section>

        <section id="menu">
          <Dashboard />
        </section>

        <Recommend />
        <Lightbox />


        <section id="reviews">
          <ReviewSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <FloatingParticles />

      </div>

      <Footer />
    </div>
  );
}

export default App;
