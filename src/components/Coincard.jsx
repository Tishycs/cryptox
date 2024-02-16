import React from 'react'
import { Link } from "react-router-dom"; 

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link className="block w-56" href={`/coin/${id}`} target={'blank'}>
    <div className="w-56 shadow-lg  p-10 rounded-lg flex flex-col justify-items-center items-center"> 
      <img className=" w-10 h-10 object-contain " src={img} alt={"Exchange"} />
      <h1 className="text-md text-center">{symbol}</h1>
      <p className="text-center line-clamp-1">{name}</p>
      <p className="text-center line-clamp-1">
        {price ? `${currencySymbol} ${price}` : "NA"}
      </p> 
    </div>
  </Link>
);



export default CoinCard;
