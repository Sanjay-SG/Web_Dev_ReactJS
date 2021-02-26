import React, { useState } from "react";

const ShortCircuitEval = () => {
    const [demo, setDemo] = useState("Demo");
    return (
        <>
            <h1>{demo || "GSS"} </h1>
            <h1>{demo && "SSG"} </h1>
        </>
    )
}

export default ShortCircuitEval;