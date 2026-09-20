import React from 'react'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative bg-red-300 rounded-4xl'>

      <img
        className='h-full w-full object-cover'
        src={props.img} alt=''
      />
       <div className='absolute left-0 top-0 h-full w-full  p-8 flex flex-col justify-between'>
         <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
         <div>
          <p className='text-xl leading-normal mb=10 text-gray-900'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore aliquid accusantium eveniet at? Inventore, cumque!
          </p>
           <div className='flex justify-between items-center mt-5'>
            <button className='bg-blue-400 text-white font-lg px-5 py-3 rounded-full'>{props.tag}</button>
             <button className='bg-blue-400 text-white font-lg px-3 py-3 rounded-full'> <i className="ri-arrow-right-long-line"></i></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Rightcard