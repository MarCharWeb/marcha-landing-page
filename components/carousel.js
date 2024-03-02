import React from "react";
import Image from 'next/image';

// Replace these imports with the correct paths to your images
import Ss4Img from '../assets/aboutus/S4.png';
import Ss5Img from '../assets/aboutus/S5.png';
import Ss6Img from '../assets/aboutus/S6.png';
import Ss7Img from '../assets/aboutus/S7.png';
import Ss8Img from '../assets/aboutus/S8.png';
import Ss9Img from '../assets/aboutus/S9.png';
import Ss10Img from '../assets/aboutus/S10.png';
import Ss11Img from '../assets/aboutus/S11.png';

const Carousel = () => {
  const images = [Ss4Img, Ss5Img, Ss6Img, Ss7Img, Ss8Img, Ss9Img, Ss10Img, Ss11Img];
  const allImages = [...images, ...images];

  // Define the width and height for all images
  const imageWidth = '1600px'; // example width
  const imageHeight = '1200px'; // example height

  return (
    <div className="flex overflow-x-auto">
      <div className="w-screen text-black relative flex items-center justify-center">
        <div className="w-full h-auto flex items-center justify-center">
          <div
            className="flex w-[1200px] overflow-hidden select-none"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
          >
            <div className="flex-shrink-0 flex items-center justify-start whitespace-nowrap w-full animate-scrollX">
              <div className="space-x-4 place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                {allImages.map((imageSrc, index) => (
                  <a key={index} target="_blank" rel="noreferrer">
                    <Image src={imageSrc} alt={`Slide ${index}`} width={imageWidth} height={imageHeight} layout="intrinsic" objectFit="cover" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
