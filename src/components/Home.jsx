// import React from 'react' 
import btcImg from '../assets/bitcoin.png'  



const Home = () => {  
  return (
    <>
      
      <div className=' bg-[#010118]'>
       
     
      <div className="h-[90vh] " >         
        <img
          className="animate-vflip w-full h-full object-contain opacity-45"
          src={btcImg}
          alt="bitcoin"
        />
      </div>     
      <div>
      <h1 className="p-1 text-center  text-6xl  text-white ">
        CRYPTOX  
      </h1> 
      </div>

        
       </div>
        
    </> 
  );
}

export default Home
