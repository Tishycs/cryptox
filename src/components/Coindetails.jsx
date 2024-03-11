import React, { useState, useEffect } from "react";
import  Chart  from './Chart';  
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { server } from "../main";
import axios from "axios";
import ErrorComponent from "./ErrorComponent"; 
import redarrow from "../assets/redarrow.png";
import greenarrow from "../assets/greenarrow.png";

const Coindetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h"); 
  const [chartArray, setChartArray] = useState([]);

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  const params = useParams();
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
                         
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        console.log(data);
        console.log(chartData);
        setChartArray(chartData.prices);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (
    <div className="bg-[#010118] text-white p-2">
      <div className="max-w-[80em] m-auto   ">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div
              className="flex flex-row"
              value={currency}
              onChange={setCurrency}
            >
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value={"inr"}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="₹ IND"
                  className="ms-2 text-sm font-medium "
                >
                  ₹ IND
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value={"eur"}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="€ EUR"
                  className="ms-2 text-sm font-medium "
                >
                  € EUR
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  checked
                  id="inline-checked-radio"
                  type="radio"
                  value={"usd"}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="$ USD"
                  className="ms-2 text-sm font-medium "
                >
                  $ USD
                </label>
              </div>
            </div>

            <div className="w-full border-1">
              <Chart arr={chartArray} currency={currencySymbol} days={days} />
            </div>
            <div className="flex flex-row p-4 overflow-x-auto">
              {btns.map((i) => (
                <button
                  disabled={days === i}
                  key={i} 
                  onClick={() => switchChartStats(i)} 
                  className="p-1 m-1 font-bold bg-[grey] rounded-sm" 
                > 
                  {i} 
                </button>
              ))}
            </div>

            <div className="flex flex-col items-start m-4 p-2 rounded-lg">
              <p className="text-sm self-center text-center opacity-[0.7]">
                Last Updated On{" "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </p>

              <img
                src={coin.image.large}
                alt="coin"
                className="w-16 h-16 object-contain"
              />

              <p className="font-bold text-xl">{coin.name}</p>

              <p>
                <span>{currencySymbol}</span>
                <span>{coin.market_data.current_price[currency]}</span>
              </p>

              <p>
                <span>
                  {coin.market_data.market_cap_change_24h > 0 ? (
                    <img src={greenarrow} className="inline max-w-[1%] " />
                  ) : (
                    <img src={redarrow} className="inline max-w-[1%]" />
                  )}
                </span>
                <span> {coin.market_data.market_cap_change_24h}</span>
              </p>

              <h1 className="font-bold text-2xl bg-black rounded-sm text-white p-2">
                {`#${coin.market_cap_rank}`}
              </h1>

              <div className="flex flex-col items-center w-full">
                <CustomBar
                  high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                  low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
                />
              </div>

              <div className="w-full p-4">
                <Item
                  title={"Max Supply"}
                  value={coin.market_data.max_supply}
                />

                <Item
                  title={"Circulating Supply"}
                  value={coin.market_data.circulating_supply}
                />

                <Item
                  title={"Market Cap"}
                  value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
                />

                <Item
                  title={"All Time Low"}
                  value={`${currencySymbol}${coin.market_data.atl[currency]}`}
                />

                <Item
                  title={"All Time High"}
                  value={`${currencySymbol}${coin.market_data.ath[currency]}`}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div> 
  );
};

const Item = ({ title, value }) => (
  <div className="flex flex-row justify-between w-full my-4">
    <p>{title}</p>
    <p>{value}</p>
  </div>
 
);

const CustomBar = ({ high, low }) => (
  <>
    <div className=" w-full h-4 mt-2 mb-4 bg-gray-200">
      <div 
        className="h-4 bg-teal-500
        w-[50%]" 
      ></div> 
    </div>

    <div className="p-1 flex flow-row">
      <span className=" bg-red-200 text-red-900">{low}</span>

      <p className="text-sm p-1">24H Range</p>

      <span className="bg-green-200 text-green-900">{high}</span>
    </div>
  </>
);

export default Coindetails;
