import React, { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    return<>
    <h1>Count : {count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>
}

export default Counter;