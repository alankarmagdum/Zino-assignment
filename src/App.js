import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App()
const [addingCard, setAddingcard] = useState(true)

{
  const [cards] = useState(
    [
      {
        title: 'Red',
        text: `color`,
      },
      {
        title: 'blue',
        text: `color`
      },
      {
        title: 'Green',
        text: `color`
      },
      {
        title: 'black',
        text: `color`
      },
    ]
  )
  return (
    <div className="App">
      <section>
        <div className='container'>
          <h1>Cards</h1>
          <div className='add'>
            <div className='card'>
              <button className='btn1'>Add</button>
              <h3 className='first'>Red</h3>
            </div>
            <div className='card'>
              <button className='btn1' href="./blue.js">Add</button>
              <h3 className='second'>Blue</h3>
            </div>
            <div className='card'>
              <button className='btn1'>Add</button>
              <h3 className='third'>Green</h3>
            </div>
            <div className='card'>
              <button className='btn1'>Add</button>
              <h3 className='four'>Black</h3>
            </div>
          </div>

          <div className='cards'>
            <div className='card1'>
              <button className='btn'>X</button>
              <h2 contenteditable="true"></h2>
            </div>
            <div className='card2'>
              <button className='btn'>X</button>
              <h2 contenteditable="true"></h2>
            </div>
            <div className='card3'>
              <button className='btn'>X</button>
              <h2 contenteditable="true"></h2>
            </div>
            <div className='card4'>
              <button className='btn'>X</button>
              <h2 contenteditable="true"></h2>
            </div>
          </div>



        </div>
      </section>
    </div>
  );
}

export default App;
