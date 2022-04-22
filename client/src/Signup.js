import React, { useState } from "react";

function Signup( {onSignup} ) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [money, setMoney] = useState(0)

    function handleSignup(){
        const user = {
            username,
            password,
            password_confirmation: confirmPassword,
            money
        }
        fetch("/sign_up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(resp => resp.json())
        .then(userJson => onSignup(userJson))
    }
    return (
        <div className="signup">
            <div>
                <img src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="Profile logo"/>
            </div>
            <form onSubmit={handleSignup}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    // autoComplete="current-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="money">Money to Deposit:</label>
                <input
                    type="number"
                    id="money"
                    value={money}
                    onChange={(e) => setMoney(e.target.value)}
                />
                <br></br>
                <button variant="fill" color="primary" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    )
}
export default Signup;