import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div  className='h-full w-2/3 flex gap-10'>
     {props.user.map(function(elem ,idx){
  return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
     })}
    </div>
  )
}

export default Rightcontent
