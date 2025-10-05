import React from "react";

const MyLazyComponent = () => {
    return(
        <>
        <h2>This is lazy-loaded component</h2>
        <p>It only loads when needed. this is loading after some time</p>
        </>
    )
}

export default MyLazyComponent;