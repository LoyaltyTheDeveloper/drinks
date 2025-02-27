import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";



function Footer() {
  return (
   <>
    <div className="bg-white">
         <footer className="bg-gray-100 text-white py-10 px-6">
      <div className="max-w- mx-auto lg:flex lg:flex-row lg:gap-x-10">

        {/* Top Section */}
        <div className="text-cente mb-6 w-[350px]">
            <p className="text-orange-600 font-bold text-xl mb-2">Drinks.ng</p>
          <p className="text-sm text-gray-500">
          Drinks.ng is the largest online distributor of beer, spirit, and wine in Nigeria. Buying drinks from our online store is the safest and easiest way to shop for your drinks in Lagos, Ibadan, Abuja and other states. We save you time, and help you avoid long queues and crowded stores.
          </p>
          <p className="text-sm text-gray-500 mt-2">
          Shop here to get the best offers on alcoholic and non-alcoholic beverages, at drinks.ng, we offer special deals when you buy your drinks in bulk. You can place your order online from the convenience of your home/office to enjoy fast drinks delivery in Nigeria.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-cente gap-4 mt-4">
            <div className="p-3 bg-black rounded-full hover:bg-blue-500 transition duration-300">
              <FaFacebookF className="text-white text-lg" />
            </div>
            <div className="p-3 bg-black rounded-full hover:bg-blue-400 transition duration-300">
              <FaTwitter className="text-white text-lg" />
            </div>
            <div className="p-3 bg-black rounded-full hover:bg-pink-500 transition duration-300">
              <FaInstagram className="text-white text-lg" />
            </div>
            <div className="p-3 bg-black rounded-full hover:bg-blue-700 transition duration-300">
              <FaLinkedinIn className="text-white text-lg" />
            </div>
          </div>
        </div>

    <div className='flex flex-wrap gap-x-[50px] lg:gap-x-[100px]'>
        <div className="text-center mt-8">     
          <p className="text-lg font-semibold text-black">Products</p>
          <div className="flex flex-col gap-2 mt-2 text-gray-500">
            <a href="#" className="hover:text-white transition">Marketplace</a>
            <a href="#" className="hover:text-white transition">Vendor's Portal</a>
            <a href="#" className="hover:text-white transition">Analytics Portal</a>
          </div>
        </div>

        <div className="text-center mt-8">     
          <p className="text-lg font-semibold text-black">Drinks.ng</p>
          <div className="flex flex-col gap-2 mt-2 text-gray-500">
            <a href="#" className="hover:text-white transition">About Us</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">FAQs</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

        <div className="text-cente mt-8">     
          <p className="text-lg font-semibold text-black">Download App</p>

          <div className="flex mt-[10px] gap-x-2">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition">
      <FaApple className="text-black text-3xl mr-2" />

      {/* Text Container */}
      <div className="flex flex-col text-left">
        <span className="text-xs text-black font-semibold">Download on the</span>
        <span className="text-lg text-black font-semibold">App Store</span>
      </div>
    </button>
    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition">
      <FaGooglePlay className="text-black text-3xl mr-2" />

      {/* Text Container */}
      <div className="flex flex-col text-left">
        <span className="text-xs text-black font-semibold">Download on the</span>
        <span className="text-lg text-black font-semibold">Play Store</span>
      </div>
    </button>
    </div>
        </div>

        </div>


      </div>
      <hr className='px-[20%] mt-4 mb-4'></hr>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
      <div className="text-gray-500 text-[12px]">drinks.ng © 2025. All rights reserved. Party Drinks Limited, RC 1103827</div>
      <div className="flex items-center">
      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="text-gray-500 text-[12px]">18+ Enjoy responsibly <span className="text-bold">www.drinkiq.com</span></div>
      </div>
      </div>
    </footer>
    </div>
   </>
  )
}

export default Footer
