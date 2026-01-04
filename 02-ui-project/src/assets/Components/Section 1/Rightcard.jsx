import React from 'react'

import Rightcardcontent from './Rightcardcontent';
const Rightcard = (props) => {
  console.log(props);
  
  return (
    <div>
        <div className='h-full relative shrink-0 m-3 overflow-hidden w-50 rounded-4xl'>
        <img className='h-full w-full object-fit object-cover' src={props.img} alt=""  />
        <Rightcardcontent  id= {props.id} tag={props.tag}/>
    </div>
 </div>
  )
}

export default Rightcard