import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //get current time
  const now = new Date().toLocaleTimeString();

  //turn the time as a state to display it dynamically to H1
  //array position 0 is value, 1 is update function
  const[time, setTime] = useState(now) 

  //this function refreshes time when "Get Time" btn is clicked
  function updateTime(){
    console.log(now)
    //give the function a new time so it can update
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>{time}</h1>
      <button onClick={updateTime} >Get Time</button>
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
