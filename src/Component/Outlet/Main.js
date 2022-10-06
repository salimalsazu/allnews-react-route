import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {

    const headers = useLoaderData().data.news_category;
    // console.log(headers);
    return (
        <div>
            <div>
                <h1 className='text-5xl font-extrabold text-red-700 mb-5' >Putin.com</h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                {
                    headers.map(header => <Header header={header} key={header.category_id} ></Header>)
                }
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;