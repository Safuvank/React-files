import React,{useState,useEffect} from "react";

function Fetch(){
    const [quotes,setQuotes]  = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/quotes")
        .then(res=>res.json())
        .then(data => setQuotes(data.quotes))
    },[])

    return<>
    {quotes.map(q =>(
        <h1 key={q.id}>{q.quote}</h1>
    ))}
    </>
}

export default Fetch;