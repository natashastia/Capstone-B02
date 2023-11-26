import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="max-w-[1640px] max-h-[640px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" class="h-9 w-9 mr-2" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Mr. <span className="font-bold">Bean</span>
          </h1>
        </div>
        <div className="hidden lg:flex justify-between font-medium pt-2 mr-5 space-x-10 text-xl">
          <button className="hover:text-yellow-500">
            <a href="/" className="flex">
              Beranda
            </a>
          </button>
          <button className="hover:text-yellow-500">
            <a href="/scan" className="flex">
              Pindai
            </a>
          </button>
          <button className="hover:text-yellow-500">
            <a href="/info" className="flex">
              Informasi
            </a>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <AiOutlineMenu size={30} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden block lg:flex justify-between bg-[#BE7656]/80 text-center space-x-10 font-medium text-xl duration-300">
          <button className="hover:text-white">
            <a href="/" className="block p-2">
              Beranda
            </a>
          </button>
          <button className="hover:text-white">
            <a href="/scan" className="block p-2">
              Pindai
            </a>
          </button>
          <button className="hover:text-white">
            <a href="/info" className="block p-2">
              Informasi
            </a>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
