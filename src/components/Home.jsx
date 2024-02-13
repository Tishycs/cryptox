import React from 'react'
import btcImg from '../assets/bitcoin.png'  
const Home = () => {  
  return (
    <>
      <div className="h-[80vh] ">
        <img
          className="animate-vflip w-full h-full object-contain  }"
          src={btcImg}
          alt="bitcoin"
        />
      </div>

      <h1 className="text-center font-bold text-4xl mb-2">CryptoX</h1>
    </>
  );
}

export default Home
