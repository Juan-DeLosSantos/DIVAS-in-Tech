import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/home';
import Calendar from './pages/calendar';
import Login from './pages/login';
import Chat from './pages/chat';
import PageNotFound from "./pages/pageNotFound";

function App() {
    return (
        <BrowserRouter>         
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;