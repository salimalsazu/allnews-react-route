import React from 'react';
import { useNavigate } from 'react-router-dom';

const Regular = ({ news }) => {
    console.log(news);

    const navigate = useNavigate();

    const handleNavigator = () => {
        navigate(`/details/${_id}`);
    }
    const { _id, author, title, thumbnail_url, details } = news;
    return (
        <div className='border-spacing-1 rounded-lg border-x-gray-400 p-5 shadow-lg' >
            <div>
                <h1 className='text-2xl font-bold text-blue-500'>{title}</h1>
            </div>
            <div className='flex justify-center items-center mt-3'>
                <img src={thumbnail_url} alt="" />
            </div>
            <div>
                <p className='mt-5 text-gray-700 text-justify'>{details.slice(0, 350)}...<button onClick={handleNavigator} className='font-bold'>See More</button>  </p>
            </div>
            <div className='mt-5'>
                <h3 className='text-left' >{author.published_date}</h3>
            </div>

        </div>
    );
};

export default Regular;