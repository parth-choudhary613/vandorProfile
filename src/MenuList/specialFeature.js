import React from 'react';

const SpecialFeatures = () => {
  const features = [
    { title: 'Free Wi-Fi', description: 'Enjoy free high-speed internet while you dine.' },
    { title: 'Live Music', description: 'Join us every Friday night for live performances.' },
    { title: 'Outdoor Seating', description: 'Relax in our comfortable outdoor seating area.' },
  ];

  return (
    <>
    <div className=' md:px-8 lg:px-16 xl:px-24 rounded-3xl  mt-8 glassmorphism'>
    <div className="p-6 text-black">
      <h2 className="text-4xl font-bold mb-4">Special Features</h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="cardscolor neuromorphism p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default SpecialFeatures;
