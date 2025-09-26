import React, { useState } from "react";


function Logged(){
    const [isLoggedIn,setIsLoggedIn] = useState(false)


    return<>
    <h1>{isLoggedIn? "Welcome" : "Please login"}</h1>
    <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Login</button>
    <button onClick={()=>setIsLoggedIn(isLoggedIn)}>log out</button>
    </>
}

export default Logged;