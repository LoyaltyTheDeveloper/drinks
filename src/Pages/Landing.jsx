import React from 'react'
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Footer from '../Components/Footer';

function Landing() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
      { name: "Home", dropdown: [] },
      { name: "Champagne", dropdown: ["Champagne Demi Sec", "Champagne - Brut Rose", "Champagne Brut Blanc", "Champagne Vintage"] },
      { name: "Whiskey", dropdown: ["Japanese Whiskey", "Bourbon", "Single Malt Scotch Whiskey", "Irish Whiskey", "Blended Scotch Whiskey"] },
    ];

    const carouselRef = useRef(null);
    const carouselRef2 = useRef(null);
    const carouselRef3 = useRef(null);
    const carouselRef4 = useRef(null);
    const carouselRef5 = useRef(null);

    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });
      }
    };


    const scrollLeft2 = () => {
      if (carouselRef2.current) {
        carouselRef2.current.scrollBy({ left: -220, behavior: "smooth" });
      }
    };
  
    const scrollRight2 = () => {
      if (carouselRef2.current) {
        carouselRef2.current.scrollBy({ left: 220, behavior: "smooth" });
      }
    };

    const scrollLeft3 = () => {
      if (carouselRef3.current) {
        carouselRef3.current.scrollBy({ left: -220, behavior: "smooth" });
      }
    };
  
    const scrollRight3 = () => {
      if (carouselRef3.current) {
        carouselRef3.current.scrollBy({ left: 220, behavior: "smooth" });
      }
    };

    const scrollLeft4 = () => {
      if (carouselRef4.current) {
        carouselRef4.current.scrollBy({ left: -220, behavior: "smooth" });
      }
    };
  
    const scrollRight4 = () => {
      if (carouselRef4.current) {
        carouselRef4.current.scrollBy({ left: 220, behavior: "smooth" });
      }
    };

    const scrollLeft5 = () => {
      if (carouselRef5.current) {
        carouselRef5.current.scrollBy({ left: -220, behavior: "smooth" });
      }
    };
  
    const scrollRight5 = () => {
      if (carouselRef5.current) {
        carouselRef5.current.scrollBy({ left: 220, behavior: "smooth" });
      }
    };

 
  return (<>
    <div className="bg-white min-h-screen">
    <nav className="w-full bg-blue-600 py-2 px-6 lg:px-[100px] text-white flex justify-between items-center">
      <span className="text- cursor-pointer">Deliver to <span className="font-bold">Select address</span></span>
      <span className="text- cursor-pointer hidden lg:flex">Become a vendor</span>
      <span className="text- cursor-pointer hidden lg:flex">Feedback</span>
    </nav>

    <div className="border-gray-200 border-b pb-2 flex flex-col items-center">
      <nav className="w-full p-3 px-6 text-white flex justify-between items-center borde ">
        <button 
          className="text-black text-2xl md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className="md:flex w-full px-[5%] justify-center lg:justify-between flex items-center">
          <span className="font-semibold text-[27px] flex text-blue-600">Afrique en primeurs</span>
         
          <span className="text-lg font-semibold">
          <div className="relative hidden lg:flex">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search for drinks" 
              className="pl-10 pr-4 py-2 px-2 bg-white rounded text-black outline-none border border-gray-300"
            />
             <button className="ml-2 bg-black text-white p-2 rounded">Search</button>
          </div>
          
          </span>
          <span className="text-lg font-semibold hidden lg:flex text-black">
          <div className="flex items-center space-x-6 ml-4">
            <div className="flex items-center space-x-2">
              <FiUser className="text-xl" />
              <span>Account</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiShoppingCart className="text-xl" />
              <span>0 items</span>
            </div>
          </div>
          
          </span>

        </div>
        <FiShoppingCart className="text-xl text-black lg:hidden"/>
      </nav>
      

      <div className="relative lg:hidden flex justify-center">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search for drinks" 
              className="pl-10 pr- bg-[white] py-2 px- w-[100%] rounded text-black outline-none border border-gray-300"
            />
             <button className="ml-2 bg-black text-white p-2 rounded">Search</button>
          </div>
      
    </div>



    <nav onMouseLeave={() => setActiveDropdown(null)} className="hidden lg:flex w-full text-black p-4 flex justify-center">
      <ul className="flex space-x-8">
        {menuItems.map((item, index) => (
          <div onMouseEnter={() => setActiveDropdown(index)}
          // onMouseLeave={() => setActiveDropdown(null)}
          >
          <li
            key={index}
            className="relative group"
            // onMouseEnter={() => setActiveDropdown(index)}
            // onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1" >
              <span>{item.name}</span>
              <FiChevronDown className="text-lg" />
            </button>

            {/* Dropdown */}
            {activeDropdown === index && (
              <div onMouseLeave={() => setActiveDropdown(null)} className="absolute left-[-50px] mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2 transition-all duration-300 z-50 group-hover:block">
                {item.dropdown.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </li>
          </div>
        ))}
      </ul>
    </nav>


    <div className="carousel w-full mt-[px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle bg-transparen">❮</a>
      <a href="#slide3" className="btn btn-circle bg-transparen">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle bg-transparen">❮</a>
      <a href="#slide4" className="btn btn-circle bg-transparen">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle bg-transparen">❮</a>
      <a href="#slide1" className="btn btn-circle bg-transparen">❯</a>
    </div>
  </div>
</div>


<div className="mt-10 flex flex-col text-blue-600 items-center">
  <div>Start shopping</div>
  <FiChevronDown/>
</div>


{/* <div className="mt-[20px] carousel carousel-center bg-white rounded-box max-w-[85%] space-x-4 mx-auto flex">


  <div className="car border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]">
  <figure className="px-10 pt-8">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="wine"
      className="rounded h-[130px]" />
  </figure>
  <div className="card-body items-center text-center">
  <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
    <div>Jameson Original</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>Irish Whiskey</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>40%</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>70cl</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
  </div>
  
  </div>
</div>


<div className="car border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]">
  <figure className="px-10 pt-8">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="wine"
      className="rounded h-[130px]" />
  </figure>
  <div className="card-body items-center text-center">
  <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
    <div>Jameson Original</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>Irish Whiskey</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>40%</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>70cl</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
  </div>
  
  </div>
</div>

<div className="car border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]">
  <figure className="px-10 pt-8">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="wine"
      className="rounded h-[130px]" />
  </figure>
  <div className="card-body items-center text-center">
  <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
    <div>Jameson Original</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>Irish Whiskey</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>40%</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>70cl</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
  </div>
  
  </div>
</div>

<div className="car border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]">
  <figure className="px-10 pt-8">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="wine"
      className="rounded h-[130px]" />
  </figure>
  <div className="card-body items-center text-center">
  <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
    <div>Jameson Original</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>Irish Whiskey</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>40%</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>70cl</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
  </div>
  
  </div>
</div>

<div className="car border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]">
  <figure className="px-10 pt-8">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="wine"
      className="rounded h-[130px]" />
  </figure>
  <div className="card-body items-center text-center">
  <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
    <div>Jameson Original</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>Irish Whiskey</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>40%</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>70cl</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
  </div>
  
  </div>
</div>

<div className="car border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]">
  <figure className="px-10 pt-8">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="wine"
      className="rounded h-[130px]" />
  </figure>
  <div className="card-body items-center text-center">
  <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
    <div>Jameson Original</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>Irish Whiskey</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>40%</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
    <div>70cl</div>
    <div className="h-[20px] ml-[10px] mr-[10px] border-l border-black lg:flex justify-between"></div>
  </div>
  
  </div>
</div>
</div> */}

<div>
<div className="flex items-center justify-between px-[5%] mt-[30px]">
  <p className="text-[17px] lg:text-[20px] text-black font-bold">Recommended</p>
  <div className="flex gap-x-2 z-0">
<button
        onClick={scrollLeft}
        className="absolut size-[20px left- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronLeft size={18} />
      </button>


      <button
        onClick={scrollRight}
        className="absolut right- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronRight size={18} />
      </button>
      <div className="flex items-center space-x-2 text-black text-[15px] lg:text-[18px] font-semibold cursor-pointer hover:text-[orange]">
      <span>View All</span>
      <FiArrowRight size={18} />
    </div>
      </div>
</div>

<div className="relative mt-5 flex items-center justify-center">
    
      


      <div
        ref={carouselRef}
        className="relative carousel py-6 carousel-center bg-white rounded-box max-w-[85%] space-x-4 mx-auto flex overflow-x-scroll scroll-smooth no-scrollbar"
      >
         <div className="absolute top-32 left-2 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded flex items-center gap-1 shadow-md">
          <div className="absolute left-0 -bottom-[6px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-orange-900" />
     
     <span>Free delivery</span>
   </div>
        {/* Repeatable Items */}
        {[...Array(6)].map((_, index) => (<>
          <div
            key={index}
            className="border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]"
          >
            
            <figure className="px- pt-8 flex justify-center">
              <img
                src="/Wine.jpg"
                alt="wine"
                className="rounded h-[130px]"
              />
             
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
                <div>Jameson Original</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>Irish Whiskey</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>40%</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>70cl</div>
              </div>
            </div>
          </div>

         
          
       </> ))}
      </div>

      
    </div>
    </div>



    <div>
<div className="flex items-center justify-between px-[5%] mt-[100px]">
  <p className="text-[17px] lg:text-[20px] text-black font-bold">Hot Deals</p>
  <div className="flex gap-x-2 z-0">
<button
        onClick={scrollLeft2}
        className="absolut size-[20px left- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronLeft size={18} />
      </button>


      <button
        onClick={scrollRight2}
        className="absolut right- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronRight size={18} />
      </button>
      <div className="flex items-center space-x-2 text-black text-[15px] lg:text-[18px] font-semibold cursor-pointer hover:text-[orange]">
      <span>View All</span>
      <FiArrowRight size={18} />
    </div>
      </div>
</div>

<div className="relative mt-5 flex items-center justify-center">
    
      

      {/* Carousel */}
      <div
        ref={carouselRef2}
        className="relative py-6 carousel carousel-center bg-white max-w-[85%] space-x-4 mx-auto flex overflow-x-scroll scroll-smooth no-scrollbar"
      >
         <div className="absolute top-32 left-2 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded flex items-center gap-1 shadow-md">
          <div className="absolute left-0 -bottom-[6px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-orange-900" />
     
     <span>Free delivery</span>
   </div>
        {/* Repeatable Items */}
        {[...Array(6)].map((_, index) => (<>
          <div
            key={index}
            className="border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]"
          >
            
            <figure className="px- pt-8 flex justify-center">
              <img
                src="/Wine2.jpg"
                alt="wine"
                className="rounded h-[130px]"
              />
             
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
                <div>Jameson Original</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>Irish Whiskey</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>40%</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>70cl</div>
              </div>
            </div>
          </div>      
          
       </> ))}
      </div>

      
    </div>
    </div>


    <div>
<div className="flex items-center justify-between px-[5%] mt-[100px]">
  <p className="text-[17px] lg:text-[20px] text-black font-bold">New Arrivals</p>
  <div className="flex gap-x-2 z-0">
<button
        onClick={scrollLeft3}
        className="absolut size-[20px left- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronLeft size={18} />
      </button>


      <button
        onClick={scrollRight3}
        className="absolut right- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronRight size={18} />
      </button>
      <div className="flex items-center space-x-2 text-black text-[15px] lg:text-[18px] font-semibold cursor-pointer hover:text-[orange]">
      <span>View All</span>
      <FiArrowRight size={18} />
    </div>
      </div>
</div>

<div className="relative mt-5 flex items-center justify-center">
    
      

      {/* Carousel */}
      <div
        ref={carouselRef3}
        className="relative carousel py-6 carousel-center bg-white max-w-[85%] space-x-4 mx-auto flex overflow-x-scroll scroll-smooth no-scrollbar"
      >
         {/* <div className="absolute top-32 left-2 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded flex items-center gap-1 shadow-md">
          <div className="absolute left-0 -bottom-[6px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-orange-900" />
     
     <span>Free delivery</span>
   </div> */}
        {/* Repeatable Items */}
        {[...Array(6)].map((_, index) => (<>
          <div
            key={index}
            className="border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]"
          >
            
            <figure className="px- pt-8 flex justify-center">
              <img
                src="/Wine3.jpg"
                alt="wine"
                className="rounded h-[130px]"
              />
             
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
                <div>Jameson Original</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>Irish Whiskey</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>40%</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>70cl</div>
              </div>
            </div>
          </div>

         
          
       </> ))}
      </div>
   
    </div>
    </div>




    <div>
<div className="flex items-center justify-between px-[5%] lg:px-[7%] mt-[100px]">
  <p className="text-[17px] lg:text-[20px] text-black font-bold">Explore Popular Categories</p>
  <div className="flex gap-x-2 z-0 lg:hidden">
<button
        onClick={scrollLeft4}
        className="absolut size-[20px left- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronLeft size={18} />
      </button>


      <button
        onClick={scrollRight4}
        className="absolut right- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronRight size={18} />
      </button>
      <div className="flex items-center space-x-2 text-black text-[15px] lg:text-[18px] font-semibold cursor-pointer hover:text-[orange]">
    </div>
      </div>
</div>

<div className="relative mt-5 flex items-center justify-center">
    
      

      {/* Carousel */}
      <div
        ref={carouselRef4}
        className="relative flex carousel lg:flex-wrap py-6 carousel-center bg-white max-w-[85%] space-x-4 gap-y-4 mx-auto flex items-center overflow-x-scroll scroll-smooth no-scrollbar"
      >
         {/* <div className="absolute top-32 left-2 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded flex items-center gap-1 shadow-md">
          <div className="absolute left-0 -bottom-[6px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-orange-900" />
     
     <span>Free delivery</span>
   </div> */}
        {/* Repeatable Items */}
        {[...Array(6)].map((_, index) => (<>
         
    <div className="carousel-item flex flex-col">
    <img
      src="/Wine5.jpg"
      className="rounded-box h-[190px] w-[270px]" />
      <div className="flex items-center gap-x-1">
        <div className="text-black text-[14px] font-bold">Wines</div>
        <span className="text-red-500 text-3xl">&#8594;</span>
      </div>
  </div>

         
          
       </> ))}
      </div>
   
    </div>
    </div>


    <div>
<div className="flex items-center justify-between px-[5%] lg:px-[7%] mt-[100px]">
  <p className="text-[17px] lg:text-[20px] text-black font-bold">Blog Posts</p>
  <div className="flex gap-x-2 z-0">
<button
        onClick={scrollLeft5}
        className="absolut size-[20px left- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronLeft size={18} />
      </button>

      <button
        onClick={scrollRight5}
        className="absolut right- z-10 p-2 bg-transparent border rounded-full hover:bg-gray-300"
      >
        <FiChevronRight size={18} />
      </button>
      <div className="flex items-center space-x-2 text-black text-[15px] lg:text-[18px] font-semibold cursor-pointer hover:text-[orange]">
      <span>View All</span>
      <FiArrowRight size={18} />
    </div>
      </div>
</div>

<div className="relative mt-5 flex items-center justify-center">
    
      

      {/* Carousel */}
      <div
        ref={carouselRef5}
        className="relative flex carousel py-6 carousel-center bg-white max-w-[85%] space-x-4 gap-y-4 mx-auto flex items-center overflow-x-scroll scroll-smooth no-scrollbar"
      >
         {/* <div className="absolute top-32 left-2 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded flex items-center gap-1 shadow-md">
          <div className="absolute left-0 -bottom-[6px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-orange-900" />
     
     <span>Free delivery</span>
   </div> */}
        {/* Repeatable Items */}
        {[...Array(6)].map((_, index) => (<>
          {/* <div
            key={index}
            className="border rounded flex flex-col justify-center bg-white max-h-[270px] carousel-item h-[250px] w-[200px]"
          >
            
            <figure className="px- pt-8 flex justify-center">
              <img
                src="src/assets/Wine3.jpg"
                alt="wine"
                className="rounded h-[130px]"
              />
             
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center mx-auto flex-wrap text-black font-bold">
                <div>Jameson Original</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>Irish Whiskey</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>40%</div>
                <div className="h-[20px] mx-[10px] border-l border-black"></div>
                <div>70cl</div>
              </div>
            </div>
          </div> */}
    <div className="carousel-item flex flex-col">
    <img
      src="/Wine5.jpg"
      className="rounded-box h-[190px] w-[270px] lg:h-[250px] lg:w-[320px]"/>
      <div className="flex flex-col items-cente gap-x-1 w-[200px]">
        <div className="text-black text-[16px] text-blue-400 font-bold mt-3">Afrique en primeurs</div>
        <div className="text-[17px] text-black font-bold hover:text-[red]">Hosting the Perfect Wine Tasting Party</div>
      </div>
  </div>      
          
       </> ))}
      </div>


   
    </div>
    </div>

    
    {/* <div className="text-[20px] font-bold text-[black] lg:w-[200px]">Join our mailing list and never miss out on amazing deals & offers.</div>
    <div className="flex gap-x-2">
    <input className="bg-transparent border-b border-black outline-none w-[300px]" placeholder='Your email address' name="email"/>
    <button className="p-3 bg-black text-white rounded-full hover:bg-blue-300 transition duration-300">
      <FiArrowRight className="text-xl" />
    </button>
   
</div> */}


<div className='py-8 pb-[100px]'>
<div className="bg-gray-50 border border-gray-200 p-6 rounded-md max-w-l w-[85%] mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:px-8 gap-4">
        {/* Text Section */}
        <div className="text-[20px] font-bold text-black lg:w-[400px]">
          Join our mailing list and never miss out on amazing deals & offers.
        </div>

        {/* Input and Button Section */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <input
            className="bg-transparent border-b border-black outline-none w-full lg:w-[300px] px-2 py-1"
            placeholder="Your email address"
            name="email"
          />
          <button className="p-3 bg-black text-white rounded-full hover:bg-blue-300 transition duration-300">
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>

</div>




    


<div className={`fixed top-[90px] left-0 h-full w-full bg-white text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:hidden p-4`}>
        {/* <button 
          className="text-white text-2xl mb-4" 
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button> */}
        <ul className="space-y-4 text-black">
          <li className="text-lg font-semibol">Home</li>
          <li className="text-lg font-semibol">Champagne</li>
          <li className="text-lg font-semibol">Whiskey</li>
        </ul>
      </div>
    </div>
 </> )
}

export default Landing
