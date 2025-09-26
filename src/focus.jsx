import React, { useRef,useEffect } from "react";

function Comp1(){
    
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    
    return<>
    <input ref={inputRef} type="text" />
    </>
}

export default Comp1;