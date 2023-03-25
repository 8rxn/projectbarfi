import React from 'react'
import images from "../../../config/images"
import {BsInstagram, BsFacebook, BsTwitter} from "react-icons/bs"

function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start bg-[#1c2d52] border-t-[2px] border-t-color-primary py-10 gap-y-6'>
      <div className='flex justify-center items-center'>
        <img src={images.Logo.src} alt={images.Logo.alt} className="h-[100px]"/>
        <h2 className='text-2xl font-bold text-color-primary'>TribeTango</h2>
      </div>
      <div className='flex flex-col items-center md:items-start'> 
        <h4 className='text-lg font-[500] text-color-primary'>Links</h4>
        <ul className='flex flex-col md:items-start items-center'>
          <li className='text-base text-white cursor-pointer'>Privacy Policy</li>
          <li className='text-base text-white cursor-pointer'>Terms & Conditions</li>
          <li className='text-base text-white cursor-pointer'>Sponsor us</li>
          <li className='text-base text-white cursor-pointer'>Join us</li>
        </ul>
      </div>
      <div className='flex flex-col items-center md:items-start gap-2'>
        <div className='flex justify-center items-center text-xl text-color-primary gap-5'>
          <BsFacebook className='cursor-pointer'/>
          <BsInstagram className='cursor-pointer'/>
          <BsTwitter className='cursor-pointer'/>
        </div>
        <p className='text-base text-color-primary'>NIT Rourkela, Odisha, India</p>
      </div>
    </div>
  )
}

export default Footer