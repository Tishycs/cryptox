import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Coindetails from "./components/Coindetails";
import ErrorComponent from "./components/ErrorComponent";
import Loader from "./components/Loader";




function App() { 
  return (
    <>
    
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchanges />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:id" element={<Coindetails />} />
          <Route path="/error" element={<ErrorComponent/>} />
          <Route path="/loader" element={<Loader/>} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App



