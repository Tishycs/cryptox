import React, { useEffect, useState } from "react";
import axios from "axios";
import {server} from "../main";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";


const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
      
        setExchanges(data);
        setLoading(false);
        //  console.log(data)
      } catch (error) {
        setError(true);
        setLoading(false);
      } 
    };
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent message={"Error while fetching coins"} />;

  return (
    <div className="max-w-full bg-[#010118]">
      <div className="max-w-[80em] m-auto p-2"> 
        {loading ? ( 
          <Loader />
        ) : ( 
          <div className="m-2 p-2 flex flex-row flex-wrap justify-evenly">
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </div>
        )}
      </div> 
    </div>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a  href={url} target={"blank"}> 
    <div className="w-56 bg-[#061121] shadow-lg shadow-[#061121]/80  p-10 rounded-lg flex flex-col justify-items-center items-center text-white m-2">
      <img className=" w-10 h-10 object-contain p-1" src={img} alt={"Exchange"} />
      <h1 className="text-lg font-bold text-center">{rank}</h1>
      <p className="text-center text-md font-semibold line-clamp-1">{name}</p>
    </div>
  </a> 
);


export default Exchanges;
