import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardNews from '../CardsNews/CardNews';

const Details = () => {
    const detailsNews = useLoaderData();
    const all = detailsNews.data;
    console.log(all);
    return (
        <div >
            <div className=' grid grid-cols-1 m-5 md:m-10 lg:m-20' >
                {
                    all.map(alldetails => <CardNews alldetails={alldetails} key={alldetails._id
                    } ></CardNews>)
                }
            </div>

        </div>
    )
};

export default Details;