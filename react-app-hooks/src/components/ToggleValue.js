import React, { useState } from "react";
import "../App.css"


const ToggleValue = () => {
    // var val = "Hello, React";
    // console.log(useState("Hello, React"));
    // let myfirstvalue = useState("Hello, React")[0];
    // console.log(myfirstvalue);
    const [value, setValue] = useState("Hello, React");
    const changeName = () => {
        // val = "Hi, React";
        // console.log(val);
        // let tempVal = value;
        // let txtValue = document.getElementById("txtValue");
        /* if (txtValue.innerText === tempVal) {
          setValue("Hi, React");
        }
        if (txtValue.innerText === "Hi, React") {
          setValue("Hello, React");
        } */
        let setV = value === "Hello, React" ? "Hi, React" : "Hello, React";
        setValue(setV);
    }
    // console.log(value);
    return (
        <div class="app">
            <h1 id="txtValue">{value}</h1>
            <button className="btn" onClick={changeName}>Change</button>
        </div>
    )
}

export default ToggleValue;