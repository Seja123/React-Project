import React from 'react'
import { ArrowRight } from 'lucide-react';

const Rightcardcontent = (props) => {
  console.log(props);
  
  return (
    
    <div className='absolute  p-7 flex   flex-col justify-between top-0 left-0 h-full w-full'>
<h2 className='mb-45 text-2xl font-semibold  bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h2>
<div>
    <p className='text-s  text-white font-bold leading-normal '>Lorem ipsum dolor illum vitae culpa facere, dicta eius.</p>
</div>
<div className='justify-between flex'>
<button className=' rounded-full  font-semibold px-3 py-2 bg-blue-500 ' >{props.tag}</button>
<button className=' rounded-full bg-blue-700  object-center py-1 px-2 '><ArrowRight /></button>
    </div>
    </div>
   
  )
}

export default Rightcardcontent