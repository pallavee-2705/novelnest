import React, { useState } from 'react';
import { styles } from '../styles';
import { logo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const icons = [faUser, faShoppingCart, faHeart];

const Navbar = () => {
  const options = ['Home', 'About Us', 'Books', 'New Release', 'Contact Us', 'Blog'];
  const iconStyle = { color: '#393280' };

  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="mt-10 mx-12 md:p-0 flex flex-col md:flex-row md:items-center mb-6 justify-between">
      <div className='flex' >
        
      {/* Brand Logo */}
      <div className='brand-logo'>
        <img className="w-16 h-16 rounded-3xl flex flex-col shadow-lg " 
          src={logo} 
          alt="Logo" 
          />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden ml-auto">
        <button
          onClick={toggleMobileMenu}
          className="text-slate-600 p-2 h-16 w-16 text-4xl"
        >
          ☰
        </button>
      </div>

      </div>


      <div className='hidden md:w-auto md:flex flex-wrap justify-center md:justify-between ml-8'>
        {options.map((option, index) => (
          <React.Fragment key={index}>
            <span className={`${styles.navButtons}`}>
              <p className="font-['Inter']">
                {option}
              </p>
            </span>
            {index < options.length - 1 && (
              <span className={`${styles.navButtons} mx-5`}>
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="hidden md:flex md:ml-28 w-full md:w-auto justify-center md:justify-end">
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <span className={`${styles.navButtons}`}>
              <FontAwesomeIcon icon={icon} size="lg" style={iconStyle} />
            </span>
            {index < icons.length - 1 && (
              <span className="mr-4 ml-4">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col justify-center items-center">
          <div className='flex flex-col ml-auto'>
              {options.map((option, index) => (
                <span key={index} className="mt-2">
                  <p className={`${styles.navButtons} cursor-pointer`} onClick={toggleMobileMenu}>
                    {option}
                  </p>
                </span>
              ))}
          </div>
          <div className='flex gap-8 mt-3 ml-auto '>
          {icons.map((icon, index) => (
            <span key={index} className="mt-2">
              <FontAwesomeIcon
                icon={icon}
                size="lg"
                style={iconStyle}
                className="cursor-pointer h-6"
                onClick={toggleMobileMenu}
              />
            </span>
          ))}

          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
