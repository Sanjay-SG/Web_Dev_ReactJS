import React, { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }
    return (
        <>
            <form action="" onSubmit={submitForm}>
                <h1>Login Form</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
            <div>

                {
                    allEntry.map((elem) => {
                        return (<div>
                            <h1>{elem.email}</h1>
                            <h1>{elem.password}</h1>
                        </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Login;