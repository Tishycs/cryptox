import React from 'react'
import btc from '../assets/bitcoin.png'
const Loader = () => {
 return (
   <div className="h-[70vh] bg-[#010118] flex items-center  text-white ">
     <div className='m-auto opacity-70'>
         <img src={btc} alt="loading...." className='w-16 animate-hflip'/>
     </div> 
   </div>
 ); 
}

export default Loader
