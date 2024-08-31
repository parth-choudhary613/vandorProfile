import React, { useState, useEffect } from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import '../profileSection/profileSection.css';
import Images from '../Components/bestseller1.jpg';
import Images2 from '../Components/best seller2.jpg';
import Images3 from '../Components/best seller3.jpg';
import Images4 from '../Components/best seller4.jpg';
import Offer1 from '../Components/offer1.jpg';
import Offer2 from '../Components/offer2.jpg';
import Offer3 from '../Components/offer3.jpg';
import Offer4 from '../Components/offer4.jpg';
import Lightbox from '../GallerySection/Gallery';
import Map from './map'

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-24") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 7 )),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
  
    <div className="mt-4 p-4 rounded-lg shadow-md text-center text-xl font-bold fontcolor">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

const Dashboard = () => {
  return (
    <>
    
     <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 pt-6">
          <div className="p-4 rounded-xl shadow-md cardscolor">
            <div className="flex justify-between items-center">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold">Business Hours</p>
              <p className="text-sm text-green-500">Open</p>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">Monday to Saturday (24*7)</p>
            <p className="text-gray-500">Closed on Sunday</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md cardscolor">
            <div className="flex justify-between items-center">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold">Contact Us</p>
              <p className="text-sm text-red-500">📞</p>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">+91 789654123</p>
            <p className="text-gray-500 mt-2">flavourfusion7535@gmail.com</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md cardscolor">
            <div className="flex justify-between items-center">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold">Follow Us On</p>
            </div>
            <p className="text-3xl grid gap-x-8 gap-y-4 grid-cols-3 mt-2">
              <TiSocialInstagram />
              <FaFacebook />
              <FaTwitter />
            </p>
            <p className="text-gray-500 mt-2">Our Social Media Handles</p>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl textstyle fontcolor text-center">
         
          <span className="textstyle fontcolor" style={{ fontSize: "50px" }}>B</span>
          est<span className="textstyle fontcolor" style={{ fontSize: "50px" }}>S</span>
          eller
         
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[Images, Images2, Images3, Images4].map((image, index) => (
            <div key={index} className="max-w-sm rounded-3xl overflow-hidden shadow-lg glassmorphism cardscolor mx-auto">
              <img className="w-full rounded-3xl h-48 object-cover p-1" src={image} alt={`BestSeller ${index + 1}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl md:text-2xl lg:text-3xl text-center fontcolor">Product {index + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl textstyle fontcolor mt-4 text-center">
          
          <span className="textstyle fontcolor" style={{ fontSize: "50px" }}>L</span>
          imited<span className="textstyle fontcolor" style={{ fontSize: "50px" }}>T</span>
          ime <span className="textstyle fontcolor" style={{ fontSize: "50px" }}>O</span>
          ffer
        </h1>

        <CountdownTimer />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-4">
          {[Offer1, Offer2, Offer3, Offer4].map((offer, index) => (
            <div key={index} className="max-w-sm rounded-3xl overflow-hidden shadow-lg glassmorphism cardscolor mx-auto">
              <img className="w-full rounded-3xl h-48 object-cover p-1" src={offer} alt={`Offer ${index + 1}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl md:text-2xl lg:text-3xl text-center fontcolor">Offer {index + 1}</div>
                <p className="line-through text-lg text-center">$19.99</p>
                <div className="font-bold text-xl md:text-2xl lg:text-3xl text-center fontcolor">Now at $15</div>
              </div>
            </div>
          ))}
        </div>
      </div>
<Map/>
      <Lightbox/>
    </>
  );
};

export default Dashboard;
