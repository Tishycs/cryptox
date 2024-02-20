// import React from 'react' 
import btcImg from '../assets/bitcoin.png'  
const Home = () => {  
  return (
    <>
      <div className="h-[90vh]  bg-[#010118] ">
        <img
          className="animate-vflip w-full h-full object-contain opacity-45"
          src={btcImg}
          alt="bitcoin"
        />
      </div>

      <h1 className="p-4 text-center  text-5xl bg-[#010118] text-white ">
        CryptoX
      </h1>
    </>
  );
}

export default Home
