import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import RadioGroup from "./RadioGroup";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

 const changePage = (page) => {
   setPage(page);
   setLoading(true);
 };

 const currencySymbol =
   currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
 const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setCoins(data);
        setLoading(false);
        //  console.log(data)
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if (error) return <ErrorComponent message={"Error while fetching coins"} />;

  return (
    <div className="max-w-[80em] m-auto p-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
       <RadioGroup/>
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
         </>
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

export default Coins;
