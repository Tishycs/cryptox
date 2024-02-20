import React from 'react' 

const Header = () => {
  return (
    <div className=" bg-[#010118]">
      <div className="bg-[#061121] max-h-24 rounded-b-3xl max-w-[80em] m-auto">
        <nav className="m-auto max-w-[50em] flex flex-row justify-between text-gray-400 font-bold text-lg ">
          <img src="" alt="logo" />
          <ul className="flex flex-row list-none">
            <li className="p-4  text-gray  hover:text-white">Home</li>
            <li className="p-4  text-gray hover:text-white">Exchange</li>
            <li className="p-4  text-gray hover:text-white">Coins</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header
