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
    <Router>
     <Header/>
      <Routes>
         <Route exact path="/" element={<Home />} />
        <Route exact path="/exchange" element={<Exchanges />} />
        <Route exact path="/coins" element={<Coins />} />
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App



