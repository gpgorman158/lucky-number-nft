import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ user, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    let allLogin;
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login_back", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
      history.push("/")
    }
    if (!user){
        allLogin = 
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                // autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button variant="fill" color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
            </button>
        </form>
    }
    else {
        allLogin = "You are already logged in"
    }

    return (
        <div className="login-form">
            {allLogin}
        </div>
    );
}
  
  export default Login;