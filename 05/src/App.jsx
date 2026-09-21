import React, { useState } from 'react';

const App = () => {

  const [title, settitle] = useState('');

  const submithandaler = function (elem) {
    elem.preventDefault();

    console.log('form submitted by', title);

    settitle('');
  };

  return (
    <>
      <div>
        <form onSubmit={function (elem) {
          submithandaler(elem);
        }}>

          <input
            type="text"
            placeholder="Enter your name"
            value={title}
            onChange={function (elem) {
              settitle(elem.target.value);
            }}
          />

          <button>Submit</button>

        </form>
      </div>
    </>
  );
};

export default App;