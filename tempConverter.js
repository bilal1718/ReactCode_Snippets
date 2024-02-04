
import {React,useState} from 'react'
const App = () => {
  const [temp,setTemp]=useState()
  function convertToKelvin(celsius){
    return celsius + 273.15;
  }
  function convertToFarenhiet(celsius){
    return celsius * (9/5) + 32;
  }
  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value={temp} onChange={(e)=>setTemp(Number(e.target.value))}
        />
        <label for="input" >°C</label>
      </form>
      <p data-testid='output'>
         {temp ? `${temp} is ${convertToFarenhiet(temp)}F and ${convertToKelvin(temp)}K ` : ""}
      </p>
    </div>
  );
};

export default App;
