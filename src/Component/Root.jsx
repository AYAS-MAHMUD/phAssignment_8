import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <main className='min-h-90 bg-gray-50'>
                <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;