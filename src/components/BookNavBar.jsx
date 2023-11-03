import React, { useState } from 'react';
import { styles } from '../styles';
import { logo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';


const icons = [faUser, faShoppingCart, faHeart];

const BookNavBar = () => {
  const options = ['Home', 'Categories', 'New Releases', 'Featured', 'Offers', 'articles'];
  const iconStyle = { color: '#393280' };

  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="w-auto my-6 mx-12  flex  items-center justify-between">
        
      {/* Brand Logo */}
      <div className='brand-logo'>
        <img className="w-16 h-16 rounded-3xl flex flex-col shadow-lg " 
          src={logo} 
          alt="Logo" 
          />
      </div>

      {/* icons  */}
      <div className="flex w-auto justify-end">
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
    
    </div>
  );
};

export default BookNavBar