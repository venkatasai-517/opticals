import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navContent = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Products", link: "#products" },
    { name: "About Us", link: "#aboutus" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-3xl text-gray-800">Mr.Optics</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navContent.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-lg font-medium text-gray-800 hover:text-green-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-gray-800" />
            ) : (
              <CiMenuFries size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            {navContent.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-lg font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
