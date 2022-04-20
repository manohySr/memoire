import React from 'react';
import {BrowserRouter as Routers, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Navbar from './components/Navbar';


const App = () => {
    return (
        <>
        <Routers>
            <Navbar />
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
