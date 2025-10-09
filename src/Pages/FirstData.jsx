import React from 'react';
import dnl from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const FirstData = ({i}) => {
    // console.log(i)
    const {image,size,title,ratingAvg,id} = i
    return (
        <div>
            {/* card */} 

        <Link to={`/CardDetails/${id}`}>
            <div className='p-[16px] rounded bg-white shadow-sm'>
                <img className='rounded h-[316px] object-cover hover:scale-103 transition ease-in-out' src={image} alt="" />
                <h1 className='text-lg my-2 font-semibold'>{title}</h1>
                <div className='flex justify-between'>
                    <h1 className='flex gap-1 justify-center items-center bg-green-50 text-green-700 font-semibold p-2 rounded'><img className='h-5' src={dnl} alt="" />{size/10}M</h1>
                    <h1 className='flex gap-1 justify-center items-center bg-orange-100 text-orange-600 font-semibold p-2 rounded'><img className='h-5' src={star} alt="" />{ratingAvg}</h1>
                </div>
            </div>
        </Link>
        </div>
    );
};

export default FirstData;