import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';





function App() { 
  return (
  <>
     <Header/>
       <Router>
        
      <Routes>
         <Route  path="/" element={<Home />} />
        <Route  path="/exchange" element={<Exchanges />} />
        <Route  path="/coins" element={<Coins />} /> 
        
        
       
      </Routes> 
      
      </Router> 
      <Footer/>
    </>
  );
}

export default App



