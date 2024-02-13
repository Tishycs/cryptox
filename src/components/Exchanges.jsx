import React from 'react'
import axios from 'axios'
import { server } from "../main";
import ErrorComponent from './ErrorComponent';




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

  if (error) return <ErrorComponent message={"Error while fetching coins"}/>

  return(
       <div className='h-[80vh]'>
        {loading ? (<Loader/>):(
          <div> hello
            <ExchangeCard/>
          </div>
          
          
          
          
        )}
          
          
       </div>

  );

};

const ExchangeCard = () => {
  return (
    <div>
      <img src="" alt="exchange" />
      <h1></h1>
      <p></p> 
    </div>
  )
}

export default Exchanges
