import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Page1content = (props) => {
  console.log(props);
  
  return (
    <div className=' h-[80vh] items-center flex justify-between gap-10 bg-amber-50 py-3 px-18'>
        <Leftcontent/>
         <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content