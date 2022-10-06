import React from 'react';

const CardNews = ({ alldetails }) => {

    const { title, thumbnail_url, details } = alldetails;

    return (
        <div className='border-spacing-1 rounded-lg border-x-gray-400 p-5 shadow-lg' >
            <div>
                <h1 className='text-2xl font-bold text-blue-500'>{title}</h1>
            </div>
            <div className='flex justify-center items-center mt-3'>
                <img src={thumbnail_url} alt="" />
            </div>
            <div>
                <p className='mt-5 text-gray-700 text-justify'>{details}</p>
            </div>
        </div>
    );
};

export default CardNews;