import React from "react";

const fruits = ["Apple","mango","orange"]

function Fruit (){
    return<>
    <ul>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
    </ul>
    </>
}

export default Fruit;