import React from "react";

const handleClick =()=>{
    alert('Hello Welcome to react')
}

function MyComponent () {
    return <div>
        <h1>Hello, React! </h1>
<button onClick={handleClick}>Click me</button>
    </div> 

}
export default MyComponent