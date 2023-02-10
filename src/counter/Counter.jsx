import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
  
    function addValue(){
      setCount(count+1);
    }
    function subValue(){
      setCount(count-1);
    }
  
    return(
      <div className='counter'>
        <p>{count}</p>
        <button onClick={addValue}>+</button>
        <button onClick={subValue}>-</button>
      </div>
    );
  }

export default Counter;