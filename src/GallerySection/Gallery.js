import React, { useState } from 'react';
import Image1 from '../Components/lightbox.jpg';
import Image2 from '../Components/lightbox1.jpg';
import Image3 from '../Components/lightbox2.jpg';
import Image4 from '../Components/lightbox3.jpg';
import Image5 from '../Components/lightbox4.jpg';
import Image6 from '../Components/lightbox5.jpg';
import Image7 from '../Components/lightbox6.jpg';
import Image8 from '../Components/lightbox7.jpg';
import Image9 from '../Components/lightbox8.jpg';
import Image10 from '../Components/lightbox9.jpg';
import Image11 from '../Components/lightbox10.jpg';
import Image12 from '../Components/lightbox11.jpg';
import Review from '../ReviewSection/Mainreview'


const images = [
  { src: Image1, alt: 'Image 9', caption: 'Strawberry Arnaud' },
  { src: Image10, alt: 'Image 8', caption: 'Platinum cake' },
  { src: Image3, alt: 'Image 3', caption: 'Absurdity Sundae' },
  { src: Image4, alt: 'Image 1', caption: 'Frozen Chocolate Haute' },
  { src: Image5, alt: 'Image 10', caption: 'Three Twin Sundae' },
  { src: Image6, alt: 'Image 6', caption: 'Bear Extraordinaire' },
  { src: Image7, alt: 'Image 7', caption: 'Golden Opulence Sundae' },
  { src: Image9, alt: 'Image 8', caption: 'The Victoria Sundae' },
  { src: Image8, alt: 'Image 9', caption: 'Byakuya' },
  { src: Image2, alt: 'Image 2', caption: 'Vinllkuya' },
  { src: Image11, alt: 'Image 2', caption: 'Kuya' },
  { src: Image12, alt: 'Image 2', caption: 'Vinll' },
];

const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const goToPrevious = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
     <div className="px-4 md:px-8 lg:px-16 xl:px-24 rounded-3xl mx-4 md:mx-8 lg:mx-16 xl:mx-24 mt-8 cardscolor neuromorphism">
     <h1 className="text-3xl md:text-5xl textstyle fontcolor text-center m-4">
       
       <span className="textstyle fontcolor" style={{ fontSize: "50px" }}>O</span>
   ur<span className="textstyle fontcolor" style={{ fontSize: "50px" }}> O</span>
       ther
   <span className="textstyle fontcolor" style={{ fontSize: "50px" }}> P</span>
       roducts
     
     </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <img
              className="object-cover w-full h-40 rounded-lg shadow-lg group-hover:opacity-75 transition-opacity duration-300"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-lg font-bold">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative flex items-center justify-center w-full h-full">
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-4 py-2 rounded-full focus:outline-none z-10"
            >
              &#8592;
            </button>

            <div className="relative max-w-3xl w-full max-h-[80vh]">
              <img
                className="object-contain w-full h-full rounded-lg"
                src={images[currentImage].src}
                alt={images[currentImage].alt}
              />
              {images[currentImage].caption && (
                <div className="text-center text-white mt-4">
                  {images[currentImage].caption}
                </div>
              )}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none z-10"
              >
                &times;
              </button>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-4 py-2 rounded-full focus:outline-none z-10"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
      </div>
      <Review/>
    </>
  );
};

export default Lightbox;
