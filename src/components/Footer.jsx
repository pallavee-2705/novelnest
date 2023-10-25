import React from 'react'
import {footerlogo, ornament2, ornament1} from '../assets';
import {FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
      <div className="w-full h-auto bg-red-500 flex py-12">


      {/* Design  */}
      <div className="opacity-30 w-[205.53px] h-[158px] relative">
      <div className="w-[15.41px] h-[15.41px] left-[-0px] top-[142.59px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[-0px] top-[95.06px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[-0px] top-[47.53px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-0 top-0 absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[47.53px] top-[142.59px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[47.53px] top-[95.06px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[47.53px] top-[47.53px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[47.53px] top-0 absolute bg-red-500" />
      <div className="w-[15.41px] h-[15.41px] left-[95.06px] top-[142.59px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[95.06px] top-[95.06px] absolute bg-zinc-100" />
      <div className="w-[15.41px] h-[15.41px] left-[95.06px] top-[47.53px] absolute bg-amber-400" />
      <div className="w-[15.41px] h-[15.41px] left-[95.06px] top-0 absolute bg-zinc-100" />

      </div>



      {/* outer div  */}
      <div className='flex flex-col py-10 gap-24 mt-6'>
      {/* main div 1  */}
      <div className='flex gap-32 w-full px-10 '>
      {/* first column  */}
      <div className='flex flex-col gap-8 w-1/3'>
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
            <div className='flex gap-10 p-4 '>
              {/* facebook  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={40} color="white" />
                </a>
              </div>
              {/* twitter  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={40} color="white" />
                </a>
              </div>
              {/* youtube  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={40} color="white" />
                </a>
              </div>
              {/* linkedin  */}
              <div className="social-icon hover:scale-110 transition-transform duration-250 ease-in-out">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={40} color="white" />
                </a>
              </div>
            </div>
      </div>
      {/* second column  */}
      <div className='gap-6 flex flex-col'>
            {/* heading  */}
            <div className='uppercase text-white text-2xl'>
              <p>
                company
              </p>

            </div>
            {/* links  */}
            <div className='flex flex-col gap-3 text-white text-lg uppercase cursor-pointer'>
            {footerLinks.map((link) => (
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
      {/* third column  */}
      <div className='gap-6 flex flex-col'>
            {/* heading  */}
            <div className='uppercase text-white text-2xl'>
              <p>
                important links
              </p>

            </div>
            {/* links  */}
            <div className='flex flex-col gap-3 text-white text-lg cursor-pointer'>
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
      <div className='flex text-lg font-light w-full px-10 text-white justify-between'>
      {/* copyrights  */}
      <div>
      © 2022 Arihant. All Rights Reserved.
      </div>
      {/* privacy  */}
      <div className='font-normal mr-6'>
      Privacy | Terms of Service
      </div>

      </div>

      </div>
      
    </div>
  )
}

export default Footer;