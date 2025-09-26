// import React, { useReducer } from "react";

// function reducer(state,action){
//     switch (action.type){
//         case "increment" :
//             return {count : state.count + 1}
//         case "decrement" :
//             return {count: state.count - 1} 
//         default:
//         return state;       
//     }
    
// }

// function Counter(){
//     const [state,dispatch] = useReducer(reducer,{count : 0});

//     return<>
//     <h1>Count : {state.count}</h1>
//     <button onClick={()=>dispatch({type : "increment"})}>+</button>
//     <button onClick={()=>dispatch({type : "decrement"})}>-</button>
//     </>
// }


// export default Counter;


import { useReducer } from "react";

function Office() {
  const [record, dispatch] = useReducer(manager, { projects: 0 });

  return (
    <div>
      <h1>Projects: {record.projects}</h1>
      <button onClick={() => dispatch({ type: "startNewProject" })}>
        Start Project
      </button>
      <button onClick={() => dispatch({ type: "finishProject" })}>
        Finish Project
      </button>
    </div>
  );
}

function manager(record, task) {
  switch (task.type) {
    case "startNewProject":
      return { projects: record.projects + 1 };
    case "finishProject":
      return { projects: record.projects - 1 };
    default:
      return record;
  }
}
export default Office;