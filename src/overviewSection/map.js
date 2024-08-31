import React from "react";
function Map() {
  return (
    <>
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 rounded-3xl mx-4 md:mx-8 lg:mx-16 xl:mx-24 mt-8 cardscolor glassmorphism">
      
    <h1 className="text-3xl md:text-5xl textstyle fontcolor text-center m-4">
       
        <span className="textstyle fontcolor" style={{ fontSize: "50px" }}>O</span>
    ur<span className="textstyle fontcolor" style={{ fontSize: "50px" }}> W</span>
        ork
    <span className="textstyle fontcolor" style={{ fontSize: "50px" }}> L</span>
        ocation
      
      </h1>
    <div className="relative w-full h-96 p-6 mb-4">
      <iframe
      title="Our Worl Place"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6859.116358304434!2d76.77217714503911!3d30.730818909725457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1724152000603!5m2!1sen!2sin"
  
        style={{ border: "20px" }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
    </div>
   
    </>
  );
}

export default Map;
