import axios from "axios";
import { useState } from "react";
import './App.css'


function App() {
  
  const [state, setState] = useState("")
  function handleWeather() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=b09c9aa03edba0cca4b144cc294a073a&units=metric`)
    .then((response) => {
      console.log(response)
    } )
    .finally(() => {
      setState('')
    })
    }
  return (
    <div>
      <input className="input" type="text" value={state} onChange={(pusher) => {
        setState(pusher.target.value)
      }}/>
      <div className="div"></div>
      <button onClick={handleWeather}> Поиск </button>
    </div>
  );
}
export default App;
// b09c9aa03edba0cca4b144cc294a073a