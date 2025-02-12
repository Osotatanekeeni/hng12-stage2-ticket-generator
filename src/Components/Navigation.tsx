import React, { useState } from 'react'
import Logo from "../assets/Images/LogoWithText.svg"
import { BsArrowRight } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
export default function Navigation() {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(location.pathname)

    const handleLinkClick = (path: string) => {
        setSelectedLink(path);
      };

   
  return (
    <div className=' flex w-full justify-center p-2 font-[JejuMyeongjo]'>
        <div className='flex rounded-2xl border border-accessColor p-2 w-full sm:w-3/4'>
        <div className=' w-full'>
            <img src={Logo} />
        </div>

        <div className='hidden w-full items-center justify-center text-[#B3B3B3] sm:flex '>
            <ul className='flex gap-8'>
                <li className={`cursor-pointer ${selectedLink === '/' ? 'text-white' : 'text-[#B3B3B3]'}`}><Link to="/" onClick={() => handleLinkClick('/')}>Events</Link></li>
                <li className={`cursor-pointer ${selectedLink === '/tickets' ? 'text-white' : 'text-[#B3B3B3]'}`}><Link to="/tickets" onClick={() => handleLinkClick('/tickets')}>My Tickets</Link></li>
                <li className={`cursor-pointer ${selectedLink === '/about' ? 'text-white' : 'text-[#B3B3B3]'}`}><Link to="/about" onClick={() => handleLinkClick('/about')}>About Project</Link></li>
            </ul>
        </div>

        <div className='flex w-full justify-end'>
            <button className='flex items-center gap-2 rounded-lg border bg-white p-2 font-light text-black'>My Tickets <span><BsArrowRight /></span></button>
        </div>
        </div>
        
    </div>
  )
}
