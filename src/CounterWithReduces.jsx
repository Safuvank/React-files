import React, { useReducer } from "react";

// first we want 3 things
//1. A reducer function

function task(state,action) {
    switch (action.type){
        case "increment":
            return{count: state.count + 1}
        case "decrement":
            return{count: state.count - 1}
        case "reset":
            return{count: 0}
        default:
            return state;
    }
}

// 2. An initial State

function Counter() {
  const [state, dispatch] = useReducer(task, {count: 0});

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type :"increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
      <button onClick={() => dispatch({type : "reset"})}>reset</button>
    </>
  );
}

export default Counter;
