import React from 'react'
import Section1 from './assets/Components/Section 1/Section1'
import Section2 from './assets/Components/Section 2/Section2'
const App = () => {
  const users =[
    {img : 'photo-1573496359142-b8d87734a5a2.avif' 
      , intro: '' 
      , tag:'Satisfied'},
     {img : 'photo-1600275669283-4bf2bb8a990c.avif' 
      , intro: '' 
      , tag:'Underserved'}, 
      {img : 'photo-1600275669439-14e40452d20b.avif' 
      , intro: '' 
      , tag:'Underbanked'},
      {img : 'premium_photo-1661766513512-c32d32da0c06.avif' 
      , intro: '' 
      , tag:'Underbanked'},
       {img : 'photo-1587614203976-365c74645e83.avif' 
      , intro: '' 
      , tag:'Underbanked'},
  ]
  
  
  return (
    <div >
        <Section1 users={users}/>    
        <Section2/>   
    </div>
  )
}

export default App