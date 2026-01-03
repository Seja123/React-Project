import React from 'react'
import {Bookmark} from 'lucide-react';
import { MapPinHouse } from 'lucide-react';

const Card = (props) => {
  console.log(props.user , props.Faculty)
  return (
     <div className='Card'>
      <div className='top'>
        <img src={props.img}/>
       <h1>{props.user}</h1>
       </div>

       <div className='center'>
        <p>Hello i am {props.user} . I am a student of {props.Faculty} </p>
        <h4>{props.level}</h4>
         </div>
         <br />
        <div className='bottom'>
          <h4>Age = {props.age}</h4>
          <br />
      <button2>Check Profile<Bookmark /></button2>
      <button1>Contact</button1>
      <h3> <MapPinHouse/> {props.city} </h3>
     
      </div>
      </div>

  )
}

export default Card