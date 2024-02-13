import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}> 
      <Route path="/" element={<Footer/>}>  
      <Route index element={<Home />} />
      <Route path="/coins" element={<Coins />} />
        <Route path='/exchange' element={<Exchanges />} /> 
    
    </Route> 
    
  ) 
);


function App({routes}) { 
return (<>
      <RouterProvider router={router}/>
    </>
  );
}

export default App



