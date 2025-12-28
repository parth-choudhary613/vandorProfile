import React from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
  const faqs = [
    { question: 'Do you offer Eggless Cakes?', answer: 'Yes! All our cakes have 100% eggless options available upon request.' },
    { question: 'What are your opening hours?', answer: 'We are scooping happiness from 10 AM to 10 PM, Monday to Saturday.' },
    { question: 'Do you provide home delivery?', answer: 'Absolutely! We deliver melting goodness within a 5-mile radius.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className='rounded-[2.5rem] mt-8 mb-20 bg-gradient-to-br from-purple-100 to-pink-100 p-1 shadow-lg'
    >
      <div className="bg-white/60 -xl rounded-[2.4rem] p-8 md:p-12 text-slate-800"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center ice-cream-font text-purple-600">
            Frequently Asked <span className="text-slate-800">Questions</span>
        </h2>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
              <h3 className="text-pink-600 font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-xl">Q.</span> {faq.question}
              </h3>
              <p className="text-slate-600 pl-6 border-l-2 border-purple-200">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FAQs;