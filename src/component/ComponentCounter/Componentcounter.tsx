import { useState } from "react"

export const Componentcounter = () => {
  const [counter, setcounter] = useState<number>(0);
  const incrementcounter= ()=>{
    setcounter((prev)=>prev+1);
  }
  const decrementcounter= ()=>{
    if(counter>0){   
    setcounter((prev)=>prev-1);
    }
 
  }
return (
    <div>
    <h2>valor de counter: {counter}</h2>
    <button onClick={incrementcounter}>Incrementar</button>
    <button onClick={decrementcounter}>Decrementar</button>
    </div>
  );
}
