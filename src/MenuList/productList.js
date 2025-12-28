import React, { useState } from 'react';

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      name: 'Classic Flavours',
      image: 'https://i.pinimg.com/236x/fe/6d/7c/fe6d7cbc66f2bd59494905c1498e50c0.jpg',
      relatedProducts: [
        { name: 'Green Pista', price: '$12.99', image: 'https://i.pinimg.com/236x/c6/40/3e/c6403ea12ef643654e1e9381e105a75e.jpg' },
        { name: 'Double Dekker', price: '$16.45', image: 'https://i.pinimg.com/236x/e0/f1/9c/e0f19c73be54e83b9c49ece419073807.jpg' },
        { name: 'Family Pack', price: '$22.58', image: 'https://i.pinimg.com/236x/49/38/fb/4938fb5b9ac960d76756a130c2f40c3a.jpg' },
        { name: 'Sour Straberry', price: '$19.42', image: 'https://i.pinimg.com/236x/e3/b5/0a/e3b50a05e76ebc9d69a266fbbaed18c6.jpg' },
      ],
    },
    {
      name: 'Cup Creams',
      image: 'https://i.pinimg.com/236x/a4/3b/d8/a43bd8140c7bda2c489a64824805ff5b.jpg',
      relatedProducts: [
        { name: 'Margarita Cup', price: '$13.99', image: 'https://i.pinimg.com/236x/ab/32/f6/ab32f6294b8f7ea141b406c3911c4897.jpg' },
        { name: 'Pepperoni Cup', price: '$14.7', image: 'https://i.pinimg.com/236x/4a/b9/50/4ab95081d15da62ae4ece56e303b4cbc.jpg' },
        { name: 'VennilaRoni Cup', price: '$16.48', image: 'https://i.pinimg.com/236x/95/68/35/9568353032fcf16a202d9256bef82f48.jpg' },
        { name: 'RusButter Cup', price: '$19.3', image: 'https://i.pinimg.com/236x/0f/cc/a2/0fcca24edd98031486a83b8a731f8d3f.jpg' },
      ],
    },
    {
      name: 'Cakes',
      image: 'https://i.pinimg.com/236x/97/9d/58/979d58165bdee1f8459cb406e2274ddd.jpg',
      relatedProducts: [
        { name: 'Unicorn', price: '$45.81', image: 'https://i.pinimg.com/236x/21/c7/66/21c766bfdf29a30c1c6f0385d7f4eb60.jpg' },
        { name: 'Deliver My Cake', price: '$85.47', image: 'https://i.pinimg.com/236x/61/67/56/616756fb4ea7b6dd88d00168a196d0cb.jpg' },
        { name: 'Blue Bash', price: '$125.82', image: 'https://i.pinimg.com/236x/fe/e2/cb/fee2cb43496170f7ab971316465e3259.jpg' },
        { name: 'Rainbow Oreo', price: '$98.45', image: 'https://i.pinimg.com/236x/19/d6/be/19d6bea5d0b17e21d4e155888b920314.jpg' },
      ],
    },
    {
      name: 'ConeFills',
      image: 'https://i.pinimg.com/236x/ec/60/da/ec60da86d7c09f3021c681014034d202.jpg',
      
      relatedProducts: [
        { name: 'Rainbow Mesh', price: '$17.25', image: 'https://i.pinimg.com/236x/cb/88/18/cb88184a597cba0266cc0852163f912d.jpg' },
        { name: 'Flour Attack', price: '$20.58', image: 'https://i.pinimg.com/236x/53/d5/4e/53d54e58cc977fa8922d22a416e2eb46.jpg' },
        { name: 'Sweet Berry', price: '$08.45', image: 'https://i.pinimg.com/236x/a3/d6/bf/a3d6bfdb258a02658a4b80a50485ed80.jpg' },
        { name: 'Blue Vinella', price: '$85.00', image: 'https://i.pinimg.com/236x/1f/58/b4/1f58b4630861ad53a2e0b5cd819c87b3.jpg' },
      ],
    },
  
  ];

  const toggleDropdown = (index) => {
    setIsOpen(!isOpen);
    setOpenIndex(index);
  };

  return (
    <div className="glassmorphism rounded-3xl p-6">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-black">Menu</h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="cardscolor neuromorphism p-4 rounded-lg shadow-md ">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-white mb-4 sm:mb-0" 
              />
              <span className="font-semibold text-center sm:text-left flex-grow mx-4">{item.name}</span>
              <span className="text-white text-center sm:text-right">{item.price}</span>
              <button className="cardscolor glassmorphism text-black px-4 py-2 rounded-lg ml-0 sm:ml-4 mt-2 sm:mt-0">Buy now</button>
              
              <button
                onClick={() => toggleDropdown(index)}
                className="mt-2 sm:mt-0 sm:ml-2 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            {isOpen && openIndex === index && (
              <ul className="mt-4 space-y-2">
                {item.relatedProducts.map((relatedItem, i) => (
                  <li key={i} className="cardscolor neuromorphism p-2 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <img 
                        src={relatedItem.image} 
                        alt={relatedItem.name} 
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mr-4" 
                      />
                      <span className="text-center sm:text-left">{relatedItem.name}</span>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <span className="mr-4 text-center sm:text-right">{relatedItem.price}</span>
                      <button className="cardscolor glassmorphism text-black px-3 py-1 rounded-lg">Buy now</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
