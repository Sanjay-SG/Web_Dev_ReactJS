import React, { useState } from 'react'

const UseStateObject = () => {
    let obj = { id: 101, name: "Sanjay", city: "BLR" };
    const [objVal, setObjVal] = useState(obj);
    const updateObj = () => {
        setObjVal({ ...objVal, name: "Sanjay SG", city: "KWR" });
    }
    return (
        <div>
            <h1>{objVal.name}, {objVal.city}</h1>
            <button className="btn" onClick={updateObj}>Update</button>
        </div>
    )
}

export default UseStateObject;
