import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/home';
import Calendar from './pages/calendar';
import Login from './pages/login';
import Mission from './pages/mission';
import Chat from './pages/chat';
import PageNotFound from "./pages/pageNotFound";

function App() {
    return (
        <BrowserRouter>         
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/login" element={<Login isLoggedIn={false}/>} />
                <Route path="/mission" element={<Mission/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;