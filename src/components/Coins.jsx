import React, { useEffect, useState } from "react";

import axios from "axios";
import { server } from "../main";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import CoinCard from "./CoinCard";


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

 const changePage = (page) => {
   setPage(page);
   setLoading(true);
 };

 
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
          <div className="flex flex-row">
            <div
              className="flex items-center me-4"
              value={currency}
              onChange={setCurrency}
            >
              <input
                id="inline-radio"
                type="radio"
                value={"inr"}
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="₹ IND"
                className="ms-2 text-sm font-medium text-black "
              >
                ₹ IND
              </label>
            </div>
            <div
              className="flex items-center me-4"
              value={currency}
              onChange={setCurrency}
            >
              <input
                id="inline-radio"
                type="radio"
                value={"eur"}
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="€ EUR"
                className="ms-2 text-sm font-medium text-black "
              >
                € EUR
              </label>
            </div>
            <div
              className="flex items-center me-4"
              value={currency}
              onChange={setCurrency}
            >
              <input
                checked
                id="inline-checked-radio"
                type="radio"
                value={"usd"}
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="$ USD"
                className="ms-2 text-sm font-medium text-black "
              >
                $ USD
              </label>
            </div>
          </div>

          <div className="m-2 p-2 flex flex-row flex-wrap justify-evenly">
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                price={i.current_price}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                url={i.url} 
                currencySymbol={currencySymbol} 
              />  
            ))}
          </div>

          <div className="flex flex-row w-full overflow-x-auto p-4">
            {btns.map((item, index) => (
              <button
                key={index}
                className="inline-flex items-center justify-center 
                 min-w-[2.5rem] p-2 m-2 bg-black text-white rounded-md"
                onChange={() => changePage(index + 1)}
              >
                {index + 1}{" "}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};


export default Coins;
