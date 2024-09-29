import React from 'react'
import {  Link } from "react-router-dom";
import App from '../App';

function About() {
  return (
    <div>


<div className="lg:h-screen h-[67vh] sm:h-auto absolute top-0 right-0 bg-[#c99484] w-[30%] sm:w-[30%] lg:w-90">

  <img className='h-screen max-md:w-[100%] max-sm:w-[100%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg" alt="" />
</div>
      
<nav className="navbar absolute top-0 left-0 w-full bg-opacity-0 bg-[#ffffff] z-50">
      <img
        src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
        alt="Logo"
        className="h-5 lg:hidden absolute right-0 top-0 m-4" 
      />

      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><a href="#">REVIEWS</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex items-center space-x-8 bg-[#ffffff]"> 
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
          alt="Logo"
          className="h-10" 
        />
        <ul className="menu menu-horizontal px-1 space-x-8">
          <li><Link to="/" className="text-lg font-medium text-[#c99484]">HOME</Link></li>
          <li><Link to="/About" className="text-lg font-medium">ABOUT</Link></li>
          <li><a href="#" className="text-lg font-medium">REVIEWS</a></li>
          <li><a href="#" className="text-lg font-medium">VIDEOS</a></li>
          <li><Link to="/Contact" className="text-lg font-medium">CONTACT</Link></li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex items-center space-x-3"> 
        <a href="#">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png"
            alt="YouTube Icon"
            className="h-7 w-7" 
          />
        </a>
        <a href="#">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
            alt="Instagram Icon"
            className="h-7 w-7" 
          />
        </a>
        <a href="#">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
            alt="Facebook Icon"
            className="h-7 w-7"
          />
        </a>

        <a
          href="/contact"
          className="border border-white text-white px-1 py-1 text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300"
        >
          LET'S TALK
        </a>
      </div>
    </nav>

<div className="lg:mt-36 sm:mt-20 mt-16 bg-[#ffffff]">  
 


  <div className="card lg:card-side flex flex-col lg:flex-row rounded-none mt-9 lg:w-[70%] w-full m-auto">
        
      
        
        <div className="card-body text-left lg:order-1 max-md:flex max-md:flex-col max-md:items-center max-sm:flex max-md:flex-col max-md:flex max-sm:flex-col max-sm:items-center ">
          <div className="flex items-center space-x-2">
            <hr className="w-11 border-t-1 border-[#c99484]" />
            <h4 className="text-sm uppercase tracking-wide text-gray-600 text-[#c99484]">Welcome</h4>
          </div>
          <h1 className="text-5xl font-bold mt-2">About Me</h1>
          <h2 className="text-xl font-semibold mt-4 text-gray-400 w-[80vh] max-md:w-[40%]">Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.</h2>
           <div className='flex flex-col h-[40vh] justify-around'>

     <div className='flex flex-col '>
            <h1 className='font-bold  max-md:text-center max-sm:text-center'>Food Critic</h1>
            <h2 className='text-gray-400 max-md:w-[80%] max-sm:w-[80%]'>Diam nulla blandit urna tristique sit etiam amet adipiscing.</h2>
          </div>
          <div className='flex flex-col '>
            <h1 className='font-bold  max-md:text-center max-sm:text-center '>Food Critic</h1>
            <h2 className='text-gray-400 max-md:w-[80%] max-sm:w-[80%]'>Diam nulla blandit urna tristique sit etiam amet adipiscing.</h2>
          </div>
          <div className='flex flex-col '>
            <h1 className='font-bold  max-md:text-center  max-sm:text-center'>Food Critic</h1>
            <h2 className='text-gray-40 max-md:w-[80%] max-sm:w-[80%]'>Diam nulla blandit urna tristique sit etiam amet adipiscing.</h2>
          </div>

           </div>
     



          <p className="mt-4 text-gray-500">
        
          </p>
      
        </div>
      </div>
</div>








<div className="bg-[#ffffff] py-10">
      <h2 className="text-center text-gray-500 text-lg mb-8">AS FEATURED IN</h2>
      
      
      <div className="grid grid-cols-2 gap-8 lg:flex lg:justify-center lg:items-center">
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg"
          alt=""
          className="h-[6rem] mx-auto lg:mx-0"
        />
        
      
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg"
          alt=""
          className="h-[6rem] col-span-2 mx-auto lg:mx-0"
        />
        
      </div>
    </div>

      



      
<div className='flex flex-col h-auto'>

<div className='flex w-[100%] justify-between items-center justify-center h-[10vh] max-md:flex-col '>
  <h1 className='font-bold text-4xl'>Follow along</h1>
  <button className='border border-[#be7c68] hover:text-white hover:bg-[#be7c68] bg-white text-[#be7c68] text-center w-[20vh] h-[7vh] font-[Montserrat] tracking-widest  max-sm:w-[15vh] max-sm:h-[5vh] max-sm:text-xs'>
    @DANNAA
    </button>
</div>
<div className='flex justify-around  max-md:flex-col max-md:flex-wrap max-md:h-auto '>
  <img className='max-md:w-[100%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-5.jpg" alt="" />
  <img className='max-md:w-[100%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-6.jpg" alt="" />
  <img className='max-md:w-[100%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-2.jpg" alt="" />
  <img className='max-md:w-[100%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-4.jpg" alt="" />
  <img className='max-md:w-[100%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-3.jpg" alt="" />
  <img className='max-md:w-[100%]' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-1.jpg" alt="" />
</div>


</div>


  <section className='bg-[#be7c68] w-full h-[60vh] flex justify-center items-center p-4 mt-[20vh]'>
  <div className='flex flex-col justify-center items-center h-full max-w-[1200px] text-center'>
    <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-[Fraunces] mb-4 max-sm:text-[4vh] max-sm:w-[30vh] max-sm:leading-relaxed'>
      Invite me to your restaurant.<br/>
      Get exposure of millions food lovers.
    </h1>
    <h2 className='text-center text-white w-full md:w-[78vh] text-sm md:text-base lg:text-lg max-sm:text-[2vh] max-sm:w-[30vh] max-sm:leading-relaxed'>
      Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit phasellus est natoque blandit facilisi eleifend.
    </h2>
    <button className='hover:border hover:border-white hover:text-white hover:bg-[#be7c68] bg-white text-[#be7c68] w-[20vh] h-[7vh] font-[Montserrat] tracking-widest mt-6 max-sm:w-[15vh] max-sm:h-[5vh] max-sm:text-xs'>
      Let's Talk
    </button>
  </div>
</section>


<footer className="footer w-full bg-base-200 text-base-content rounded p-10 flex flex-col max-md:w-full">
  <div className='flex flex-wrap md:flex-nowrap justify-between items-center w-full mb-6'>
    <div className='flex justify-center items-center mb-4 md:mb-0'>
      <img className='w-[10vh] h-[5vh]' src="https://websitedemos.net/food-blogger-02/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg" />
    </div>

    <nav className="flex flex-wrap justify-center md:justify-between items-center text-gray-500 mb-4 md:mb-0 max-md:space-y-2 md:space-y-0">
      <a className="link link-hover mx-2">Home</a>
      <a className="link link-hover mx-2">About</a>
      <a className="link link-hover mx-2">Reviews</a>
      <a className="link link-hover mx-2">Video</a>
      <a className="link link-hover mx-2">Contact</a>
    </nav>

    <nav className='flex justify-center items-center'>
      <div className="flex space-x-4">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
  </div>

  <aside className='w-full mt-6'>
    <div className='flex flex-wrap justify-around text-center text-gray-400 space-y-2 md:space-y-0'>
      <p>© {new Date().getFullYear()} Food Blogger & Influencer</p>
      <p>Powered by Food Blogger & Influencer</p>
    </div>
  </aside>
</footer>

    </div>
  )
}

export default About
