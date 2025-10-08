import React from 'react';
import First from './First';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div className=''>
            <First data={data}></First>
        </div>
    );
};

export default Home;