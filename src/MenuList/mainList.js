import React from "react";
import FAQs from "./FAQ";
import SpecialFeatures from "./specialFeature";
import "./menulist.css";

function App() {
  return (
    // Added 'relative' to the main container
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 py-10 px-4 md:px-8 overflow-hidden font-sans relative">
      {/* --- NEW ADDITION: The Sprinkles Background --- */}

      {/* Your existing blob animation can stay or be removed, they work together */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto">
        <SpecialFeatures />
        <FAQs />
      </main>
    </div>
  );
}

export default App;
