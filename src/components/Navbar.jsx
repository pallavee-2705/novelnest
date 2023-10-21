import React from 'react'
import { styles } from '../styles';
import { logo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';



const icons = [faUser, faShoppingCart, faHeart]; // Icon components


const Navbar = () => {
  
  const options = ['Home', 'About Us', 'Books', 'New Release', 'Contact Us', 'Blog'];

  const iconStyle = { color: '#393280' }; // Set the desired color

  return (
    <div className="mt-10 flex">
      <div className="ml-16 w-20 h-20 rounded-3xl flex flex-col shadow-lg">
      <img className='rounded-3xl shadow-lg' 
          src={logo} 
          alt="Logo" 
        />
      </div>

      <div className='ml-36 mt-5 w-[838px] flex justify-between '>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          <span className={`${styles.navButtons}`}>
            <p className="font-['Inter']">

            {option}
            </p>
          </span>
          {index < options.length - 1 && (
            <span className={`${styles.navButtons}`}>
              |
            </span>
          )}
        </React.Fragment>
         ))}
       </div>

       <div className="ml-28 mt-5 w-[155px] h-[23px] relative flex">
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <span className={`${styles.navButtons}`}>
          <FontAwesomeIcon icon={icon} size="lg" style={iconStyle} /> {/* Apply custom style */}
          </span>
          {index < icons.length - 1 && (
        <span className="mr-4 ml-4"> {/* Add margin-right for gap */}
        |
            </span>
          )}
        </React.Fragment>
      ))}
    </div>

  
    </div>
  );
}

export default Navbar;
