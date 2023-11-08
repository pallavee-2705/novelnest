import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { logo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { GoogleLogin, googleLogout } from '@react-oauth/google'; // Import GoogleLogout from @react-oauth/google
import { jwtDecode } from 'jwt-decode';
import { useStateContext } from '../context/ShareContext';
import Cart from "./Cart"

const icons = [faUser, faShoppingCart, faHeart];

const Navbar = () => {
  const options = ['Store', 'Categories', 'New Releases', 'Featured', 'Offers', 'articles'];
  const iconStyle = { color: '#393280' };

  const { showCart, setShowCart, totalQuantities, setTotalQuantities } = useStateContext();  

  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [userGivenName, setUserGivenName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);

    // Assuming the given name is in the 'given_name' field of the decoded JWT
    const givenName = userData.given_name;

    // Store the given name in local storage
    localStorage.setItem('givenName', givenName);

    // Store the given name in the state
    setUserGivenName(givenName);

    // Set isLoggedIn to true
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const storedGivenName = localStorage.getItem('givenName');
    if (storedGivenName) {
      setUserGivenName(storedGivenName);
      setIsLoggedIn(true);
    }

    const storedQuantity = localStorage.getItem('quantity');
    if(storedQuantity)
    {
      setTotalQuantities(parseInt(storedQuantity));
      
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserGivenName('');
    localStorage.setItem('givenName', '');
    googleLogout();

  }

  const isHomePage = window.location.pathname === '/';  
  
  return (
    <div className="mt-10 mx-12 md:p-0 flex flex-col md:flex-row md:items-center mb-6 justify-between">
      <div className='flex' >
        
      {/* Brand Logo */}
      <div className='brand-logo'>
        <a  href='/'>
        <img className="w-16 h-16 rounded-3xl flex flex-col shadow-lg " 
          src={logo} 
          alt="Logo" 
          />
        </a>
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


      {/* middle menu */}
      {isHomePage && 
      <div className='hidden md:w-auto md:flex flex-wrap justify-center md:justify-between ml-8'>
        {options.map((option, index) => (
          <React.Fragment key={index}>
            {index===0 ? (
              <div className='flex'>
                 <a href='/store' className={`${styles.navButtons}`}>
              <p  className="font-['Inter']">
                {option}
              </p>
            </a>
            {index < options.length - 1 && (
              <span className={`${styles.navButtons} mx-5`}>
                |
              </span>
            )}
              </div >
            ) : (
              <div  className='flex'>
                 <a href={`#${option}`} className={`${styles.navButtons}`}>
              <p  className="font-['Inter']">
                {option}
              </p>
            </a>
            {index < options.length - 1 && (
              <span className={`${styles.navButtons} mx-5`}>
                |
              </span>
            )}
              </div>
            )}
           
          </React.Fragment>
        ))}
      </div>
      }
      
      {!isLoggedIn ? ( // Show the login button if the user is not logged in
        <GoogleLogin
          theme="filled_black"
          shape="pill"
          logo_alignment="left"
          useOneTap
          onSuccess={handleGoogleLoginSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
        ></GoogleLogin>
      ) : (
        <div className="hidden md:flex md:ml-28 w-full md:w-auto justify-center md:justify-end flex gap-6">
          {/* user */}
          <div className='relative group'>
            <FontAwesomeIcon icon={faUser} size="lg" style={iconStyle} className='hover:scale-110' />
            <div className={`absolute w-[100px] bg-gradient-to-b from-gray-200 to-slate-300 rounded-xl p-2 font-['Inter'] hidden group-hover:block`}>
              <p className='w-auto font-semibold tracking-wider mb-3'>Hi, {userGivenName}</p>
              <button onClick={handleLogout} className='w-full flex justify-center p-1 bg-red-200 rounded-full hover:scale-105 hover:shadow-xl'>Logout</button>
            </div>
          </div>   
          {/* cart */}
          <button onClick={()=>setShowCart(true)} className='flex relative hover:scale-110'>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" style={iconStyle} className='' />
            <div className='absolute z-10 bg-red-500 text-white rounded-full -translate-y-2 translate-x-3 px-1 text-[10px]'>{totalQuantities}</div>        
          </button>  
          {/* wishlist */}
          <div>
            <FontAwesomeIcon icon={faHeart} size="lg" style={iconStyle} className='hover:scale-110' />
          </div>       
        </div>
      )}
        

      
      

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col justify-center items-center">
          {isHomePage && 
          <div className='flex flex-col ml-auto'>
              {options.map((option, index) => (
                <span key={index} className="mt-2">
                  <p className={`${styles.navButtons} cursor-pointer`} onClick={toggleMobileMenu}>
                    {option}
                  </p>
                </span>
              ))}
          </div>
          }
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


      {showCart && (
        <Cart />
      )}
    </div>
  );
};

export default Navbar;
