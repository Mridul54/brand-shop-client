import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {
    const details = useLoaderData();

    return (
        <div>
            <h1 className='text-6xl text-emerald-300 my-10 text-center'>brand wise products</h1>
            <div  className="grid md:grid-cols-2 gap-5">
                {
                    details.map(detail => <Detail key={detail._id} detail={detail}
                    
                    ></Detail>)
                }
            </div>
        </div>
    );
};

export default Details;