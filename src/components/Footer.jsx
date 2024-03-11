import React from 'react'
import TishaAvt from '../assets/tishavatar.png';  
const Footer = () => {
  return ( 
    <div className="bg-[#010118]  ">
      <main
        className="w-[95vw] m-auto flex overflow-auto justify-between  flex-row
    bg-[#061121] rounded-t-3xl max-w-full text-white p-2"
      >
        <div className="flex flex-col p-5 ">
          <p>About Us</p>
          <p>
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </p>
        </div>

        <div className="grow mt-[5rem]  ">
          <p className=" text-sm">©2024,CryptoX,Inc.</p>
        </div>

        <div className="pr-4 text-center ">
          <img
            src={TishaAvt}
            alt="image"
            className="w-20 h-25 object-contain"
          />
          <p className="">Tisha Gupta</p>
          <p className="">Founder</p>
        </div>
      </main>
    </div>
  );
}
 
export default Footer