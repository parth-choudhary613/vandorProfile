import React, { useState } from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Overview from '../overviewSection/overView'
import './profileSection.css';

const FlavourFusion = () => {
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [profileImage, setProfileImage] = useState("https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=");

  const handleCameraClick = () => {
    setShowImageOptions(!showImageOptions);
  };

  const handleSeeImageClick = () => {
    setIsImageEnlarged(true);
    setShowImageOptions(false);
  };

  const handleChangeImageClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        setIsImageEnlarged(false);
        setShowImageOptions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCallToUsClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
    <div className="background-image bg-cover bg-center text-white p-8 mx-4 md:mx-8 rounded-b-3xl neuromorphism">
      <div className="relative inline-block px-4 md:px-8">
        <img
          src={profileImage}
          alt="Profile"
          className={`rounded-full object-cover transition-all duration-300 ${isImageEnlarged ? "w-48 h-48 md:w-72 md:h-72" : "w-24 h-24 md:w-36 md:h-36"}`}
        />
        <div
  className={`absolute bottom-2 right-2 cursor-pointer transition-all duration-300 transform -translate-x-[130%] -translate-y-1/2`}
  onClick={handleCameraClick}
>
  <p className="text-xl ml-[-0.6rem] md:ml-[-0.4rem] lg:ml-[-0.3rem]">📷</p>
</div>

        {showImageOptions && (
          <div className=" p-4 rounded-lg mt-2 flex space-x-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 glassmorphism">
            <button 
              onClick={handleSeeImageClick} 
              className="block text-black  px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors duration-300 glassmorphism"
            >
              See Image
            </button>
            <label className="block text-black cursor-pointer px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500 transition-colors duration-300 glassmorphism">
              Change Image
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleChangeImageClick} 
                className="hidden" 
              />
            </label>
          </div>
        )}
      </div>
      <div className="mt-8 text-left">
        <h1 className="text-3xl md:text-5xl textstyle textshadow"><span className="textshadow" style={{fontSize:"100px"}}>F</span>lavour<span style={{fontSize:"100px"}}>F</span>usion</h1>
        <p className="text-lg md:text-xl mt-4 ">
          <span className="textshadow">"Savoring</span> <span className="font-bold text-white textstyle fontcolor" style={{fontSize:"50px"}}>Global Flavors</span> <span className="textshadow">Locally"</span>
        </p>
        <button className="bg-black text-white px-6 py-2 md:px-8 md:py-4 rounded-full mt-6 glassmorphism" onClick={handleCallToUsClick}>
          Call to Us ⬇️
        </button>
        {showDropdown && (
          <div className="bg-black p-4 rounded-lg mt-4 glassmorphism">
            <div className="mb-4 flex items-center space-x-2">
              <p>Follow us on</p>
              <TiSocialInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
            <p>Contact us</p>
            <p>📞 +91 789654123</p>
          </div>
        )}
      </div>
    </div>
      <Overview/>
      </>
  );
};

export default FlavourFusion;
