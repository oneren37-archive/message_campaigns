import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewMessagePage from './pages/NewMessagePage';
import CampaignPage from './pages/CampaignPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/campaign" element={<CampaignPage />} />
                <Route path="/new-message" element={<NewMessagePage />} />
            </Routes>
        </div>
    );
}

export default App;
