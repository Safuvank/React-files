import {memo} from "react";

const MyComponent = memo (function MyComponent(props){
    return (
        <>
        <div>{props.value}</div>
        </>
    )
});


export default MyComponent;