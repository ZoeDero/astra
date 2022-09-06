import React from 'react';
import About from '../../components/about/About';
import BarNav from '../../components/nav/BarNav';


import './homeScreen.scss'

const HomeScreen = () => {
    return (
        <div>
            <BarNav/>
            <About/>
        </div>
    );
};

export default HomeScreen;