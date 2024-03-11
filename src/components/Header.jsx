import React from 'react' 
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <div className=" bg-[#010118]">
      <div className="bg-[#061121] max-h-24 rounded-b-3xl max-w-[80em] m-auto">

        <nav className="m-auto max-w-[50em] flex flex-row justify-between text-gray-400 font-bold text-lg ">
          <p className="text-[3em] p-2">CX</p>
        
          <ul className="flex flex-row list-none">
            <li className="p-4  text-gray  hover:text-white">
              <NavLink to="/">
                Home
              </NavLink>
            </li>

            <li className="p-4  text-gray hover:text-white">
              <NavLink to="/exchange">Exchanges</NavLink>
            </li>        

            <li className="p-4  text-gray hover:text-white">
              <NavLink to="/coins">Coins</NavLink>
            </li>
          </ul>
             
        </nav>
      </div>
    </div>
  );
}

export default Header
