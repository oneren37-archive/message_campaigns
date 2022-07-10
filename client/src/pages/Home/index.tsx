import hardWork from './hard-work.png';
import React, { useEffect } from 'react';
import Campaign from '../../features/campaign/Campaign';
import CampaignsContainer from '../../features/campaign/Campaign';

const Home = () => {
    return (
        <header className="App-header">
            <img src={hardWork} className="App-logo" alt="img" />
            <CampaignsContainer />
        </header>
    );
};

export default Home;
