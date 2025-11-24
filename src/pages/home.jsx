import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate("/calendar")}>Calendar</button>
            <button onClick={() => navigate("/login")}>Log In</button>
            <button onClick={() => navigate("/mission")}>Mission</button>
            <button onClick={() => navigate("/chat")}>Chat</button>
        </div>
    )
}