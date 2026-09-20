import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Content = (props) => {
  return (
    <div className='py-3 px-18 gap-10 flex items-center h-[90vh]  '>
      <Leftcontent />
      <Rightcontent user={props.user}/>
    </div>
  )
}

export default Content
