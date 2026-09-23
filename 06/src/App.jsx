import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submit = (e) => {
    e.preventDefault()

    const copytask = [...task]

    copytask.push({ title, details })

    settask(copytask)

    setTitle('')
    setdetails('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-amber-50'>

      <form
        onSubmit={submit}
        className='flex lg:w-1/2 gap-4 flex-col items-start p-10'
      >

        <h1 className='text-3xl font-bold'>
          Add Notes
        </h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium w-full py-2 border-2 rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          placeholder="Write Details"
          className="px-5 py-2 w-full border-2 h-20 rounded"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value)
          }}
        />

        <button className='bg-white w-full text-black px-5 py-2 rounded'>
          Add Notes
        </button>

      </form>


      <div className='lg:w-1/2 p-10 lg:border-l-2'>

        <h1 className='text-3xl font-bold'>
          Recent Notes
        </h1>

        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>

          {task.map(function(elem) {
            return (
              <div className='h-52 w-45 rounded-2xl bg-white text-black p-5'>
                <h2 className='font-bold text-xl'>
                  {elem.title}
                </h2>

                <p className='mt-2'>
                  {elem.details}
                </p>
              </div>
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default App