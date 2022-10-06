import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Regular from '../Regular/Regular';

const Breaking = () => {
    const news = useLoaderData();
    const allNews = news.data;
    // console.log(allNews);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-8 p-5'>
            {
                allNews.map(news => <Regular news={news} key={news._id} ></Regular>)
            }
        </div>
    );
};

export default Breaking;