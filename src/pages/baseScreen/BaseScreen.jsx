import React from 'react';
import { Outlet } from 'react-router-dom';
import BarNav from '../../components/nav/BarNav';
// import RespNavBar from '../../components/nav/RespNavBar';

const BaseScreen = () => {
    return (
        <>
        
            <header>
                <BarNav />
                
            </header>
            <main>
                <Outlet />

               
            </main>
            <footer>

            </footer>
        </>
    );
};

export default BaseScreen;