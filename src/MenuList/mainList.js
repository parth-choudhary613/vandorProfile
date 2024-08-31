
import React from 'react';
import FAQs from './FAQ';
import MenuList from './productList';
import  SpecialFeatures from './specialFeature';

function App() {
  return (
    <div className="background-image2 bg-cover bg-center px-4 md:px-8 lg:px-16 xl:px-24 rounded-3xl mx-4 md:mx-8 lg:mx-16 xl:mx-24 mt-8 neuromorphism">
      <header className="rounded-3xl p-6 text-center">
      <h1 className="text-3xl md:text-5xl textstyle text-white text-center m-4">
       
       <span className="textstyle " style={{ fontSize: "50px" }}>O</span>
   ur
   <span className="textstyle " style={{ fontSize: "50px" }}> P</span>
       roducts
     
     </h1>
      </header>
      <main className="max-w-4xl mx-auto mt-8">
        <MenuList />
        <SpecialFeatures />
        <FAQs />
      </main>
    </div>
  );
}

export default App;
