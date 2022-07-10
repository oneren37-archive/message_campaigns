import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    // useEffect(() => {
    //     fetch('/api/campaign', {
    //         method: 'DELETE',
    //         body: JSON.stringify({
    //             id: 1
    //         }),
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    //         .then(res => console.log(res))
    //         .catch(e => console.log(e))
    // }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
