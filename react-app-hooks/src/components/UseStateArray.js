import React, { useState } from "react";

const UseStateArray = () => {
    const objArr = [
        { id: 100, name: "Sanjay", city: "BLR" },
        { id: 101, name: "SSG", city: "KWR" },
        { id: 102, name: "GSS", city: "KWR-BLR" },
    ];
    const [objVal, setObjVal] = useState(objArr);
    const clearData = () => {
        setObjVal([]);
    }
    const removeElem = (id) => {
        console.log("remove", id);
        const newObjArray = objVal.filter((curElem) => {
            return curElem.id !== id;
        })
        setObjVal(newObjArray);
    }
    return (
        <>
            {
                objVal.map((elem) => {
                    return (<h4 key={elem.id}>
                        {elem.name} at {elem.city}
                        <button className="btn" onClick={() => { removeElem(elem.id) }}>Remove</button>
                    </h4>)
                })
            }
            <button className="btn" onClick={clearData}>Clear</button>
        </>
    )
}

export default UseStateArray;