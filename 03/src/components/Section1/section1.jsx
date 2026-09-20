 import React from 'react'
import Navbar from './navbar'
import Content from './content'
 
 const Section1 = (props) => {
   return (
     <div className='h-screen w-full '>
        <Navbar />
        <Content user={props.user}/>
     </div>
   )
 }
 
 export default Section1
 