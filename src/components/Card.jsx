import React from 'react'

function Card(props) {
  return (
  
<div className='flex flex-col justify-around w-[25%] max-sm:w-[100%] max-md:w-[100%] max-sm:items-center max-md:items-center '>
<img className="max-md:w-[100%] max-md:items-center "  src={props.img2} alt="" />
<h1 className='font-[Fraunces] font-bold text-3xl'>{props.title2}</h1>
<h2 className='text-gray-400 text-[2.5vh]'>{props.text2}</h2>
<div className='flex justify-center items-center justify-around w-[15vh]  '>
<span class="elementor-button-text text-[#be7c68] ">Read More </span>
<svg className='w-[2vh] flex items-center justify-center' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
<path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path></svg>
</div>
</div>

  )
}

export default Card
