import React from 'react';
import { useLoaderData } from 'react-router-dom';
;

const Details = () => {
    const details = useLoaderData();
    const {_id, name, brand, category, price, description, photo, rating} = details;
    console.log(details)

    return (
        <div>
            <h1 className='text-6xl text-emerald-300 my-10 mx-auto text-center'>brand wise products</h1>

                <div className="card card-compact w-9/12 mx-auto bg-base-100 shadow-xl">
                    <figure><img className=' w-9/12' src={photo} alt="Shoes" /></figure>
                    <div className="card-body w-9/12 mx-auto">
                        <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <h2>{brand}</h2>
                        </div>
                        <p>{description}</p>
                        
                        <div className='flex justify-between items-center m'>
                            <h2>Price: {price}</h2>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                        
                    </div>
                </div>
                
                   
            </div>
        
    );
};

export default Details;