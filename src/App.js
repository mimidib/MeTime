import './App.css';
import { useState } from 'react';

function App() {
  //get current time
  const now = new Date().toLocaleTimeString();
  console.log("----(Within App() ) Retrieved current time: " + now + "----");

  //turn the time as a state to display it dynamically to H1
  //array position 0 is value, 1 is update function
  const[time, setTime] = useState(now) 

  //this function refreshes time when "Get Time" btn is clicked
  function updateTime(){
    console.log("----(Within updateTime() ) Button Get Time request accepted----");
    console.log(now)
    //give the function a new time so it can update
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    console.log("----(Within updateTime() ) Time posted successfully: " + now + "----");
  }

  return (
    <div class="p-3 mb-2 bg-dark text-white" className="App">
      <header className="App-header">
      <title>MeTime</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"/>
      
      <h1 id="time">{time}</h1>
      <button type="button" class="btn btn-dark" onClick={updateTime} >Get Time</button>
      </header>
    </div>
  );
}

export default App;
