import React from 'react'

function Best(props) {
  return (
    
   
<div className='flex flex-col justify-around w-[30%] max-sm:w-[100%] max-md:w-[100%] max-sm:items-center max-md:items-center'>
<img className="max-sm:w-[100%] max-md:w-[100%]" src={props.img} />
<h1 className='font-[Fraunces] font-bold text-3xl '>{props.title}</h1>
<h2 className='text-gray-400 text-[2.5vh]'>{props.text}</h2>
    </div>
  
  )
}




export default Best
