import {useState} from 'react';

export default function Login({isLoggedIn}) {
    const [username, setUsername] = useState("");

    function loginUser() {
        if (username === "") {
            throw new Error("Invalid Username");
        }
    }

    return (
        <div>
            <h1>{isLoggedIn ? "You are already logged in" : "This is the log in page, please log in"}</h1>

            {!isLoggedIn && (
                <>
                <input placeholder='Username'/>
                <br/>
                <input placeholder='Password' onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <button onClick={loginUser}>Log In</button>
                </>
            )}
        </div>
  );
}