import React from 'react'
import Page1content from './Page1content'
import Nav from './nav'
const Section1 = (props) => {
  console.log(props);
  
  return (
    <div className='h-screen w-full  bg-amber-50'>
      
          <Nav/>
        <Page1content users= {props.users}/>
    </div>
  )
}

export default Section1