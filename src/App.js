import { useState } from 'react';
import './App.css';

function App() {

  const [ count, setCount] = useState(0);

  return (
    <div className="App">
       <input  />
       {count}<button onClick={()=>{ setCount(count + 1)}} >+</button>
    </div>
   
  );
}

export default App;


