import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img className='h-50 md:h-70' src={error} alt="" />
            <h1 className='mt-10 text-2xl md:text-4xl font-semibold'>Oops, page not found!</h1>
            <p className='text-gray-500 my-3'>The page you are looking for is not avilable</p>
            <Link to='/' className='px-10 btn bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded'>Go Back!</Link>
        </div>
    );
};

export default ErrorPage;