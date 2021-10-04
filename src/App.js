import { useState } from "react";
import "./App.css"

function App() {
  const [number, setNumber] = useState (0) 
  
  function menos(){
    setNumber (number - 1)
  } 
  
  function zerar(){
    setNumber (0)
  }

  function mais(){
    setNumber (number + 1)
  } 

  return (
    <div className="App">
    
    <h1>Contador</h1>
    <div id="numero">{number} <br />
    <button className ="btn-menos btn" onClick= {menos} >menos</button>
    <button className ="btn-zerar btn" onClick= {zerar}>zerar</button>
    <button className ="btn-mais btn" onClick= {mais}>mais</button>
    
    </div>

    </div>
  );
}

export default App;
