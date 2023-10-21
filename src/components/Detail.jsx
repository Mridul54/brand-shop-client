import React from 'react';

const Detail = ({detail}) => {
    const {_id, name, brand, category, price, description, photo, rating} = detail;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl h-96 w-full">
                <figure><img className="w-60 h-64" src={photo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title mt-14">{name}</h2>
                    <h3>Brand Name: {brand}</h3>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <p>Price: {price}</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                    <div className="mb-10 ">
                    <div className="btn-group space-x-8">
                        <Link to={`/details/${_id}`}>
                           <button className="btn btn-active ">Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                           <button className="btn btn-neutral ">Edit</button>
                        </Link>
                        <button
                         onClick={() => handleDelete(_id)} className="btn bg-orange-500">Delete</button>
                    </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Detail;