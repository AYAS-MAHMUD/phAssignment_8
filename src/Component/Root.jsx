import React from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';

const Root = () => {
    const navigation = useNavigation()
    const inNavigating = Boolean(navigation.location)
    return (
        <div>
            <Navbar/>
            <main className='min-h-90 bg-gray-50'>
                {inNavigating && <div className='flex justify-center item pt-10'><span className="loading loading-dots loading-xl "></span></div>}
                <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;