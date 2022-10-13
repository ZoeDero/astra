import React from 'react';
import { Outlet } from 'react-router-dom';
import BarNav from '../../components/nav/BarNav';

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