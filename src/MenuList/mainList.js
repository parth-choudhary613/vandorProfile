import React from 'react';
import FAQs from './FAQ'; 
import MenuList from './productList';
import SpecialFeatures from './specialFeature';
import FloatingParticles from './FloatingParticles'; // <-- IMPORT IT HERE
import './menulist.css'; 

function App() {
  return (
    // Added 'relative' to the main container
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 py-10 px-4 md:px-8 overflow-hidden font-sans relative">
      
      {/* --- NEW ADDITION: The Sprinkles Background --- */}
      <FloatingParticles />

      {/* Your existing blob animation can stay or be removed, they work together */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Added relative and z-10 to header and main to ensure they sit ON TOP of the sprinkles */}
      <header className="relative z-10 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 ice-cream-font drop-shadow-sm">
           <span className="text-pink-500 text-6xl md:text-8xl">O</span>ur
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ml-4">
             Products
           </span>
        </h1>
        <p className="text-slate-500 mt-2 text-lg">Taste the magic in every scoop</p>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto">
        <MenuList />
        <SpecialFeatures />
        <FAQs />
      </main>
      
    </div>
  );
}

export default App;