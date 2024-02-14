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
    <div className="max-w-[80em] m-auto p-auto">
      {loading ? (
        <Loader />
      ) : (
        <div className="m-2 p-2 flex flex-row flex-wrap justify-evenly">
          {exchanges.map((i)=>(
          <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
          ))}
          
          
        </div>
      )}
    </div>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
   
  <a className="block w-56" href={url} target={"blank"}>
    
    <div className="w-56 shadow-lg  p-10 rounded-lg flex flex-col justify-items-center items-center">
      <img className=" w-10 h-10 object-contain " src={img} alt={"Exchange"} />
      <h1 className="text-md text-center">{rank}</h1>
      <p className="text-center line-clamp-1">{name}</p>
    </div>
    
  </a>
);


export default Exchanges;
