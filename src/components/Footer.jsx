import React from 'react'
import {footerlogo} from '../assets';
import {FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ornament2, ornament } from '../assets';
const Footer = () => {
  const footerLinks = [

    {
      id: 1,
      title: 'Home',
      link: 'https://www.goodreads.com',

    },
    {
      id: 2,
      title :'About Us',
      link: 'https://www.goodreads.com',

    },
    {
      id: 3,
      title: 'Books',
      link: 'https://www.goodreads.com',

    },
    {
      id: 4,
      title: 'New Release',
      link: 'https://www.goodreads.com',

    },
    {
      id: 5,
      title: 'Contact Us',
      link: 'https://www.goodreads.com',
    },
    {
      id: 6,
      title: 'Blog',
      link: 'https://www.goodreads.com',
    }

  ];
  const importantLinks = [

    {
      id: 1,
      title: 'Privacy Policy',
      link: 'https://www.goodreads.com',

    },
    {
      id: 2,
      title :'FAQs',
      link: 'https://www.goodreads.com',

    },
    {
      id: 3,
      title: 'Terms of Service',
      link: 'https://www.goodreads.com',

    }
  ];
  return (
      <div className="w-full h-auto bg-red-500 flex pb-10">


      {/* Design  */}
      <div className="opacity-30">
        <img src={ornament} alt="ornament" className='max-sm:h-[150px]'/>
      </div>



      {/* outer div  */}
      <div className='flex flex-col pt-12 w-full h-auto gap-24 px-16 pr-24'>
      {/* main div 1  */}
      <div className='flex w-full max-md:flex-col gap-20 max-lg:gap-10 justify-between'>
      {/* first column  */}
      <div className='flex flex-col gap-12 h-full w-1/3 max-md:w-full'>
            {/* logo  */}
            <div>
              <img src={footerlogo} 
              alt="footerlogo" 
              />
            </div>
            {/* subtext */}
            <div className='text-white text-lg font-light'>
              <p>
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>

            </div>
            {/* socials */}
            <div className='flex py-2 w-full'>
              {/* facebook  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out w-1/4 h-full">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className='w-10 h-10 max-md:w-5 max-md:h-5'  color="white" />
                </a>
              </div>
              {/* twitter  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out w-1/4">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className='w-10 h-10 max-md:w-5 max-md:h-5' color="white" />
                </a>
              </div>
              {/* youtube  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out w-1/4">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className='w-10 h-10 max-md:w-5 max-md:h-5' color="white" />
                </a>
              </div>
              {/* linkedin  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out w-1/4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='w-10 h-10 max-md:w-5 max-md:h-5' color="white" />
                </a>
              </div>
            </div>
      </div>
      
      {/* second column  */}
      <div className='gap-6 flex flex-col h-full max-md:w-full'>
            {/* heading  */}
            <div className='uppercase text-white text-2xl max-lg:text-xl'>
              <p>
                important links
              </p>

            </div>
            {/* links  */}
            <div className='flex flex-col gap-3 text-white text-lg max-lg:text-md cursor-pointer'>
            {importantLinks.map((link) => (
              <div 
                key={link.id}
                onClick={() => {
                  window.open(link.link, "_blank");
                }}
                className='hover:scale-105'
              >
                {link.title}
              </div>
            ))}

            </div>
      </div>

      </div>

      {/* main div 2  */}
      <div className='flex max-md:flex-col text-lg font-light text-white justify-between'>
      {/* copyrights  */}
      <div>
      © 2022 Arihant. All Rights Reserved.
      </div>
      {/* privacy  */}
      <div>
      Privacy | Terms of Service
      </div>

      </div>
      {/* <div className="flex justify-end h-auto">
        <img src={ornament2} alt="ornament" className='h-[100px] opacity-30'/>
      </div> */}

      </div>
      
    </div>
  )
}

export default Footer;