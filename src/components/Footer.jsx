import React from 'react'
import {footerlogo} from '../assets';
import {FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div className="w-full h-auto bg-red-500">


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
          <div className="w-[15.41px] h-[15.41px] left-[142.59px] top-[142.59px] absolute bg-zinc-100" />
          <div className="w-[15.41px] h-[15.41px] left-[142.59px] top-[95.06px] absolute bg-zinc-100" />
          <div className="w-[15.41px] h-[15.41px] left-[142.59px] top-[47.53px] absolute bg-zinc-100" />
          <div className="w-[15.41px] h-[15.41px] left-[142.59px] top-0 absolute bg-amber-400" />
          <div className="w-[15.41px] h-[15.41px] left-[190.11px] top-[142.59px] absolute bg-zinc-100" />
          <div className="w-[15.41px] h-[15.41px] left-[190.11px] top-[95.06px] absolute bg-zinc-100" />
          <div className="w-[15.41px] h-[15.41px] left-[190.11px] top-[47.53px] absolute bg-red-500" />
          <div className="w-[15.41px] h-[15.41px] left-[190.11px] top-0 absolute bg-zinc-100" />
        </div>



      {/* outer div  */}
        <div className='flex flex-col py-10 px-36'>
          {/* main div 1  */}
        <div className='flex'>
          {/* first column  */}
          <div className='flex flex-col gap-3'>
                 {/* logo  */}
                <div>
                  <img src={footerlogo} 
                  alt="footerlogo" 
                  />
                </div>
                {/* subtext */}
                <div className='text-white text-lg'>
                  <p>
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>

                </div>
                {/* socials */}
                <div className='flex gap-10 p-4'>
                  {/* facebook  */}
                  <div className="social-icon">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={36} color="white" />
                    </a>
                  </div>
                  {/* twitter  */}
                  <div className="social-icon">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter size={36} color="white" />
                    </a>
                  </div>
                  {/* youtube  */}
                  <div className="social-icon">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                      <FaYoutube size={36} color="white" />
                    </a>
                  </div>
                  {/* linkedin  */}
                  <div className="social-icon">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={36} color="white" />
                    </a>
                  </div>
                </div>
          </div>
          {/* second column  */}
          <div>
                {/* heading  */}
                <div className='uppercase text-white text-xl'>
                  <p>
                    company
                  </p>

                </div>
                {/* links  */}
                <div>

                </div>
          </div>
          {/* third column  */}
          <div>
                {/* heading  */}
                <div>

                </div>
                {/* links  */}
                <div>

                </div>

          </div>

        </div>

        {/* main div 2  */}
        <div className='flex'>
          {/* copyrights  */}
          <div>

          </div>
          {/* privacy  */}
          <div>

          </div>

        </div>

        </div>
    </div>
  )
}

export default Footer;