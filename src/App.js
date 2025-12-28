import React from 'react';

// --- STYLE IMPORTS ---
import './profileSection/profileSection.css'; // Global CSS for fonts/animations

// --- COMPONENT IMPORTS ---
import Navbar from './NavBar';
import FlavourFusion from './profileSection/profileSection'; // Your Hero Section
import Dashboard from './overviewSection/overView'; // Your Products/Offers Section
import Recommend from './Recommendationsection/Recommend'; // Your Recommendations
import AboutSection from './Testimonial/Testi'; // Your History/Team (Renamed from Testimonials)
import ReviewSection from './ReviewSection/Mainreview'; // Your Reviews
import Lightbox from './GallerySection/Gallery'; // Your Gallery
import Footer from './Footer';
import FloatingParticles from './MenuList/FloatingParticles.jsx'; // The background animation

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 font-sans relative overflow-x-hidden">
      
      {/* 1. Background Animation (Sits behind everything) */}
      <FloatingParticles />
      
      {/* 2. Navigation (Fixed on top) */}
      <Navbar />

      {/* 3. Main Page Content (Added padding-top so content isn't hidden behind Navbar) */}
      <div className="pt-20">
        
        {/* Hero Section */}
        <section id="home">
            <FlavourFusion />
        </section>

        {/* Dashboard (Bestsellers & Offers) */}
        <section id="menu">
            <Dashboard />
        </section>

        {/* Recommendations & Testimonials */}
        <section>
            <Recommend />
        </section>

        {/* About Us / Team */}
        <section id="about">
            <AboutSection />
        </section>

        {/* Reviews */}
        <section id="reviews">
            <ReviewSection />
        </section>

        {/* Gallery / Lightbox */}
        <section>
            <Lightbox />
        </section>

      </div>

      {/* 4. Footer */}
      <Footer />
      
    </div>
  );
}

export default App;