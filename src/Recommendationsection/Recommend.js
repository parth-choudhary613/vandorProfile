import React from 'react';
import Testimonial from '../Testimonial/Testi';
const vendors = [
  {
    id: 2,
    name: 'Tasty Bites',
    image: 'https://sharpsheets.io/wp-content/uploads/2023/11/ice-cream.webp',
    diningRating: 4.2,
    deliveryRating: 3.9,
    cuisines: 'Dry Fruits, Cones, Cruson',
    location: 'Sector 17, Chandigarh',
  },
  {
    id: 3,
    name: 'Carvel',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/65/5d/7b/caption.jpg?w=600&h=400&s=1',
    diningRating: 4.6,
    deliveryRating: 4.3,
    cuisines: 'EggLess, CreamBuns, Vegan',
    location: 'Sector 35, Chandigarh',
  },
  {
    id: 4,
    name: 'Bob Rocks',
    image: 'https://blog.petpooja.com/wp-content/uploads/2022/05/our-ladies.jpg',
    diningRating: 4.5,
    deliveryRating: 4.1,
    cuisines: 'GlodPlated, Bakery, Ice Cream',
    location: 'Sector 22, Chandigarh',
  },
  {
    id: 3,
    name: 'Carvel',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/65/5d/7b/caption.jpg?w=600&h=400&s=1',
    diningRating: 4.6,
    deliveryRating: 4.3,
    cuisines: 'EggLess, CreamBuns, Vegan',
    location: 'Sector 35, Chandigarh',
  },
];

const recommendations = [
  {
    id: 5,
    name: 'Cream World',
    image: 'https://media.istockphoto.com/id/516110670/photo/display-of-assorted-ice-creams.jpg?s=612x612&w=0&k=20&c=-gP93Q6SgH25Y5kOn8jcPosylGiZ2nc3Bhm0gRVNY68=',
    diningRating: 4.7,
    deliveryRating: 4.5,
    cuisines: 'Belgium, Chocolates, Straberry',
    location: 'Sector 7, Chandigarh',
  },
  {
    id: 6,
    name: 'Baileys Bays',
    image: 'https://afar.brightspotcdn.com/dims4/default/ab4061e/2147483647/strip/false/crop/1000x629+0+0/resize/1000x629!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fc5%2Fac%2Fb67a4c8efddd11d0d621ced81c76%2Foriginal-0ac4bcac3ba7611abea243dc20f9e45b.jpg',
    diningRating: 4.3,
    deliveryRating: 4.0,
    cuisines: 'Italian, Pasta, Pizza',
    location: 'Sector 15, Chandigarh',
  },
  {
    id: 6,
    name: 'Capitano Gelato',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/a0/b0/fa/scoop-ice-cream-parlour.jpg',
    diningRating: 4.3,
    deliveryRating: 4.0,
    cuisines: 'Cups, Cakes, FamilyPack',
    location: 'Sector 15, Chandigarh',
  },
  {
    id: 6,
    name: 'Baileys Bays',
    image: 'https://afar.brightspotcdn.com/dims4/default/ab4061e/2147483647/strip/false/crop/1000x629+0+0/resize/1000x629!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fc5%2Fac%2Fb67a4c8efddd11d0d621ced81c76%2Foriginal-0ac4bcac3ba7611abea243dc20f9e45b.jpg',
    diningRating: 4.3,
    deliveryRating: 4.0,
    cuisines: 'Italian, Pasta, Pizza',
    location: 'Sector 15, Chandigarh',
  },
];

// VendorCard Component
const VendorCard = ({ vendor }) => (
  <div className="border rounded-lg shadow-lg cardscolor glassmorphism hover:shadow-xl m- transition-shadow">
    <div className="overflow-hidden rounded-t-lg h-48">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-full object-cover transition-transform duration-200 transform hover:scale-110"
      />
    </div>
    <div className="p-4 ">
      <h2 className="text-lg font-semibold">{vendor.name}</h2>
      <div className="flex items-center space-x-2 my-2">
        <span className="text-green-700 font-semibold bg-green-100 rounded px-2 py-1 text-sm">
          {vendor.diningRating}★
        </span>
        <span className="text-gray-600 text-sm">Customer</span>
        <span className="text-gray-600 text-sm">FeedBack</span>
        </div>
      <p className="text-sm text-gray-700 truncate">{vendor.cuisines}</p>
      <p className="text-sm text-gray-500">{vendor.location}</p>
    </div>
  </div>
);

// VendorGrid Component
const VendorGrid = ({ vendors }) => (
  <div className="container mx-auto p-4 ">
    <h1 className="text-6xl font-bold text-center mt-4 fontcolor textstyle">Similar Restaurants</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  </div>
);

// Recommendations Component
const Recommendations = ({ recommendations }) => (
  <div className="m-8 ">
    <h2 className="text-6xl font-bold text-center mb-4 fontcolor textstyle">Recommended for you</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recommendations.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <VendorGrid vendors={vendors} />
      <Recommendations recommendations={recommendations} />
      <Testimonial/>
    </div>
  );
};

export default App;
