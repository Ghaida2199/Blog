
import Best from "./components/Best"
import Card from "./components/Card"
import'./App.css'
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import {  Link } from "react-router-dom";
function App() {

  return (
    <>


<div className="lg:h-screen h-[67vh] sm:h-auto absolute top-0 right-0 bg-[#c99484] w-[30%] sm:w-[30%] lg:w-80"></div>
      
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
            <li><Link to="#">HOME</Link></li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="#">REVIEWS</Link></li>
            <li><Link  to="#">VIDEOS</Link></li>
            <li><Link to="/Contant">CONTACT</Link></li>
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
          <li><Link href="/" className="text-lg font-medium text-[#c99484]">HOME</Link></li>
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
        
        <figure className="lg:order-2">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
            alt=""
            className="w-full max-w-xs mx-auto mt-6 lg:mt-0" 
          />
        </figure>
        
        <div className="card-body text-left lg:order-1 max-md:flex max-md:flex-col max-md:items-center max-sm:flex max-md:flex-col max-md:flex max-sm:flex-col max-sm:items-center ">
          <div className="flex items-center space-x-2">
            <hr className="w-11 border-t-1 border-[#c99484]" />
            <h4 className="text-sm uppercase tracking-wide text-gray-600 text-[#c99484]">Welcome</h4>
          </div>
          <h1 className="text-5xl font-bold mt-2">I'm Dianna Adams</h1>
          <h2 className="text-2xl font-semibold mt-4">Food Critic / Influencer / Blogger</h2>
          <p className="mt-4 text-gray-500">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris.
          </p>
          <a
            href="#"
            className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white rounded-none transition-colors duration-300 mt-6 inline-block w-32"
          >
            Join Insider
          </a>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full md:w-[80%] py-4 md:py-0">
      <div className="flex flex-col items-center">
        <svg className="mb-2 w-[27px] md:w-[45px] text-[#be7c68] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"></path>
        </svg>
        <h1 className="font-bold text-3xl md:text-4xl font-[Fraunces]">1.2M+</h1>
        <h2 className="text-gray-600 font-[Fraunces] tracking-widest text-[2vh] md:text-[2.5vh]">Subscribers</h2>
      </div>
      <div className="flex flex-col items-center">
        <svg className="mb-2 w-[27px] md:w-[45px] text-[#be7c68] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"></path>
        </svg>
        <h1 className="font-bold text-3xl md:text-4xl font-[Fraunces]">1.8M+</h1>
        <h2 className="text-gray-600 font-[Fraunces] tracking-widest text-[2vh] md:text-[2.5vh]">Followers</h2>
      </div>
      <div className="flex flex-col items-center">
        <svg className="mb-2 w-[27px] md:w-[45px] text-[#be7c68] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M476.5 85.3c-16.1 7.1-33.2 11.8-51.2 14 18.4-11 32.6-28.4 39.2-49.1-17.3 10.2-36.4 17.6-56.8 21.6-16.3-17.4-39.3-28.3-64.9-28.3-49.1 0-88.9 39.8-88.9 88.9 0 7 0.8 13.8 2.3 20.4-73.9-3.7-139.5-39.1-183.3-92.8-7.7 13.2-12.1 28.4-12.1 44.7 0 30.8 15.7 58 39.6 73.9-14.6-0.5-28.4-4.5-40.4-11.1v1.1c0 43.1 30.7 79 71.4 87.1-7.5 2-15.4 3-23.6 3-5.8 0-11.4-0.6-16.9-1.6 11.4 35.6 44.4 61.6 83.5 62.3-30.6 24-69.2 38.3-111.1 38.3-7.2 0-14.3-0.4-21.3-1.3 39.6 25.4 86.6 40.2 137.1 40.2 164.4 0 254.3-136.2 254.3-254.2 0-3.9-0.1-7.8-0.3-11.7 17.5-12.6 32.6-28.3 44.6-46.3z"></path>
        </svg>
        <h1 className="font-bold text-3xl md:text-4xl font-[Fraunces]">1.5M+</h1>
        <h2 className="text-gray-600 font-[Fraunces] tracking-widest text-[2vh] md:text-[2.5vh]">Twitter</h2>
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


<div className="h-auto flex-col flex justify-evenly w-[80] bg-[#ffffff] ">
<div className="flex  items-center justify-center justify-around max-md:h-auto max-sm:h-auto h-[25vh] ">
    <h1 className=' text-6xl font-[Fraunces] font-bold w-[57vh] ml-7 '>Latest Reviews</h1>
    <button className="border border-[#be7c68] tracking-widest w-[20vh] hover:bg-[#be7c68] hover:text-white h-[6vh] text-[#be7c68]">View All </button>
</div>
<div className="flex justify-around flex-wrap w-[100%] ">
<div className="flex flex-wrap justify-around h-auto   ">

<Card
  img2="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
  title2="Grilled Flank Steak with Chimichurri"
  text2="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."
  />
 <Card

img2="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
title2="Mushroom Penne with Walnut Pesto"
text2="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus."
/>
<Card
img2="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
title2="Garlic Butter White Wine Shrimp Linguine"
text2="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."
/> 
 </div> 
  </div>
    </div>


<div className="h-auto flex-col flex justify-evenly bg-[#f2efee]  ">

<div className="flex flex-col items-center justify-center justify-evenly max-md:h-auto max-sm:h-auto h-[25vh] ">
    <h1 className="font-bold text-6xl font-[Fraunces] max-sm:text-[5vh] max-sm:text-center">Best in Class Restaurant</h1>
    <h2 className="w-[110vh] text-gray-400 text-[2.3vh] text-center max-sm:w-[80%] max-md:w-[90%]">Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</h2>
  </div>


<div className="flex justify-around flex-wrap w-[100%] ">

 <div className="flex flex-wrap justify-around h-auto   ">

 <Best
img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg"
title="Bern's Steak House"
text="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."
/>
<Best
img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg"
title="Eewak Korean Restaurant"
text="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
/>
<Best
img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg"
title="The Ramban Vegan House"
text="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
/>
<Best
img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg"
title="Maniest Bake & Cake"
text="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
/>
<Best
img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg"
title="Crush Los Angeles"
text="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
/>
<Best
img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg"
title="The Mike Winery"
text="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
/>
</div> 
  
 </div>
</div>   


<div className="flex justify-center items-center min-h-screen bg-[#f2efee]">
      <div className="relative bg-white p-8 w-full max-w-[160vh] flex flex-col md:flex-row items-center border-[7px] border-gray-200">
        
        <div className="relative w-full md:w-1/2">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
            alt=""
            className="w-full h-auto object-cover relative md:-top-16" 
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Join Mailing List</h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.
          </p>
          <form className="flex flex-col items-center md:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="p-3 border border-gray-300 w-64 mb-4 md:mb-0 md:mr-4"
            />
            <button
              type="submit"
              className="border border-[rgb(190,124,104)] text-[rgb(190,124,104)] px-4 py-2 text-sm font-medium hover:bg-[rgb(190,124,104)] hover:text-white transition-colors duration-300 w-32"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  


<section className="bg-[#f2efee] flex flex-col md:flex-row justify-center items-center h-auto md:h-[97vh] w-[100%] p-4"> 
  <div className="flex flex-col w-full md:w-[40%] justify-around h-auto md:h-[95%] mb-8 md:mb-0"> 
    <h1 className='text-4xl md:text-6xl font-[Fraunces] font-bold'>Latest Videos</h1>
    <div className="relative">
    <img className="w-full md:w-[90%] h-auto md:h-[50vh] rounded-md " src="https://dianna-adams-food-blogger.netlify.app/assets/food-blogger-latest-video-1-CWtBEYFF.jpg" />
    <button className="absolute inset-0 flex items-center justify-center">
              <span className="btn btn-circle btn-lg bg-white text-black shadow-xl absolute max-md: absolute max-md:top-40 max-md:left-[45vh]  max-sm:absolute max-sm:top-20 max-sm:right-30 max-sm:left-40">▶</span>
            </button>
          </div>
    <div className="flex flex-col justify-around h-auto md:h-[25vh] mt-4">        
      <h2 className="text-xl md:text-3xl font-bold font-[Fraunces]">Dianna Adams visits the Sooto Restaurant | Uncovered Miami</h2>
      <h1 className="w-full md:w-[65%] text-gray-400 mt-2">A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</h1>
    </div>
  </div>

  <div className="flex flex-col justify-center items-center gap-4 md:gap-6 h-auto md:h-[80vh] w-full md:w-[40%]">
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full"> 
      <img className="w-[30%] md:w-[20%] rounded-md" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="" />
      <div className="flex flex-col w-full md:w-[70%] justify-around h-auto md:h-[11vh]">
        <h1 className="font-medium text-lg md:text-[3vh]">Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h1>
        <h2 className="text-gray-400">Enim imperdiet fames nisl, purus et diam aliquet</h2>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full"> 
      <img className="w-[30%] md:w-[20%] rounded-md" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg" alt="" />
      <div className="flex flex-col w-full md:w-[70%] justify-around h-auto md:h-[11vh]">
        <h1 className="font-medium text-lg md:text-[3vh]">Lobortis turpis turpis vehicula laoreet egestas enim ornare</h1>
        <h2 className="text-gray-400">Enim imperdiet fames nisl, purus et diam aliquet</h2>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full"> 
      <img className="w-[30%] md:w-[20%] rounded-md" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg" alt="" />
      <div className="flex flex-col w-full md:w-[70%] justify-around h-auto md:h-[11vh]">
        <h1 className="font-medium text-lg md:text-[3vh]">Tempus quis ac viverra condimentum sit nulla viverra</h1>
        <h2 className="text-gray-400">Enim imperdiet fames nisl, purus et diam aliquet</h2>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
      <img className="w-[30%] md:w-[20%] rounded-md" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg" alt="" />
      <div className="flex flex-col w-full md:w-[70%] justify-around h-auto md:h-[11vh]">
        <h1 className="font-medium text-lg md:text-[3vh]">Quis mauris egestas enim urna dictum</h1>
        <h2 className="text-gray-400">Enim imperdiet fames nisl, purus et diam aliquet</h2>
      </div>
    </div>
    <button className="border border-[#be7c68] hover:bg-[#be7c68] hover:text-white tracking-widest w-full md:w-[77vh] h-[6vh] text-[#be7c68] mt-4">
      View All Videos
    </button>
  </div>
</section>



   <section className='bg-[#be7c68] w-full h-[60vh] flex justify-center items-center p-4'>
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


    </>
  )
}

export default App
