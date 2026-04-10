import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
// let counter = 5;


let [counter , setCounter] = useState(15);
const addValue = () =>{
  console.log("clicked" , counter);
  if(counter>=20)
    console.log("VALUE IS GREATER THAN 20");
  else
  setCounter(counter+1);
}

const removeValue = () =>{
  if(counter<=0)
    console.log("VALUE IS SMALLER THAN 0");
  else
  setCounter(counter-1);
}



  return (
    <>
      <h1>chai aur react</h1>
      <h2> Counter value : {counter}</h2>
      <button onClick={addValue}> ADD VALUE {counter}</button>
      <br></br>
      <button onClick={removeValue}> REMOVE VALUE {counter}
      </button>
    </>
  )
}

export default App
