
import React from 'react';
const FAQs = () => {
  const faqs = [
   
    { question: 'Do you offer EggLess Cakes?', answer: 'Yes, we have a variety of EggLess Cakes available.' },
    { question: 'What are your opening hours?', answer: 'We are open from 10 AM to 10 PM, Monday to Saturday.' },
    { question: 'Do you provide home delivery?', answer: 'Yes, we offer home delivery within a 5-mile radius.' },
   
  ];

  return (
  <div>
     <div className=' md:px-8 lg:px-16 xl:px-24 rounded-3xl  mt-8  glassmorphism'>
   
    <div className="p-6 text-black"> 
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="cardscolor neuromorphism p-4 rounded-lg text-black shadow-md">
            <h3 className=" text-black font-semibold text-lg">{faq.question}</h3>
            <p className="text-black ">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
   
  );
};

export default FAQs;
