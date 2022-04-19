import React from 'react';
import {BrowserRouter as Routers, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';


const App = () => {
    return (
        <>
        <Routers>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
        </Routers>
        
        </>
    );
}

export default App;
