import React from 'react'
import Nav from './nav'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  console.log(props);
  
  return (
    <div id='right' className=' rounded-4xl overflow-x-auto h-full  flex-nowrap flex w-2/3 '>
      {props.users.map(function(elem,idx){
      return <Rightcard  key={idx}  id ={idx} img={elem.img} tag={elem.tag}/>
      })}

 
    </div>
  )
}

export default Rightcontent