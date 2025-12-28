import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart, FaPaperPlane } from 'react-icons/fa';
import './profileSection/profileSection.css';

const Footer = () => {
  return (
    <footer className="relative bg-white/40 backdrop-blur-xl border-t border-white/60 mt-20 pt-16 pb-8">
      
      {/* Decorative Blob at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMN 1: BRAND */}
          <div className="space-y-4">
            <h2 className="text-3xl text-slate-800 ice-cream-font">
              Flavour<span className="text-pink-500">Fusion</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Serving the sweetest scoops and happiest smiles since 2020. Made with local love and global flavors.
            </p>
            <div className="flex gap-4">
              <SocialBtn icon={<FaFacebookF />} />
              <SocialBtn icon={<FaTwitter />} />
              <SocialBtn icon={<FaInstagram />} />
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 ice-cream-font">Quick Links</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li><a href="#" className="hover:text-pink-500 transition">Our Menu</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Locations</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Catering</a></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 ice-cream-font">Find Us</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li>Sector 17, Chandigarh</li>
              <li>+91 789 654 123</li>
              <li>hello@flavourfusion.com</li>
              <li className="text-green-600 font-bold">Open 10 AM - 10 PM</li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 ice-cream-font">Sweet Updates</h3>
            <p className="text-slate-600 mb-4 text-sm">Subscribe for free scoops on your birthday!</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email..." 
                className="w-full bg-white border border-pink-200 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-pink-500 shadow-sm"
              />
              <button className="absolute right-1 top-1 bg-pink-500 text-white p-2 rounded-full shadow-md hover:bg-pink-600 transition">
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            © 2024 Flavour Fusion. Made with <FaHeart className="text-red-400 animate-pulse" /> by YourName.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialBtn = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white text-pink-500 shadow-md flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
    {icon}
  </a>
);

export default Footer;