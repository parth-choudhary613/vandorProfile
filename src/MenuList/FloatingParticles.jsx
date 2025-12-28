// FloatingParticles.jsx
import React, { useMemo } from 'react';

const FloatingParticles = () => {
  // Generate a fixed set of particles with random properties once on mount
  const particles = useMemo(() => {
    const colors = [
      'bg-pink-400',   // Strawberry
      'bg-yellow-400', // Lemon
      'bg-blue-300',   // Blueberry
      'bg-green-300',  // Mint
      'bg-purple-300', // Grape
      'bg-red-400'     // Cherry
    ];
    
    // Create 40 particles
    return [...Array(40)].map((_, i) => {
      // Random width between 8px and 16px
      const size = Math.random() * 8 + 8; 
      
      return {
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        // Random horizontal position (0% to 100%)
        left: `${Math.random() * 100}%`, 
        // Random animation duration (15s to 30s) for varied speeds
        duration: `${15 + Math.random() * 15}s`, 
        // Negative delay so they start mid-animation (doesn't look like they all start at the top at once)
        delay: `-${Math.random() * 30}s`,
        width: `${size}px`,
        height: `${size}px`,
        // Random shape: some round, some rectangular sprinkles
        borderRadius: Math.random() > 0.5 ? '50%' : '4px',
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute opacity-60 shadow-sm ${p.color} particle-animation`}
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            borderRadius: p.borderRadius,
            // We use CSS variables to pass unique animation timings to CSS
            '--fall-duration': p.duration,
            '--fall-delay': p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;