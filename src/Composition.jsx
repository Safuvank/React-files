import React from "react";


function Child(){
    return <h1>Welcome</h1>
}

function Parent(){
    return<>
    <Child/>
    <h2>Called Child component</h2>
    </>
}

export default Parent;