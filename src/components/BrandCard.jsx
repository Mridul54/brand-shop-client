import React from 'react';
import { Link } from 'react-router-dom';


const BrandCard = ({brand}) => {
    const { image, brand_Name} = brand;
    console.log(brand)
    
    
    return (
        
            <div>
                
                    <div>

                        <Link to={'http://localhost:5173/brandProduct'}>
                        <div  className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={image} alt="Shoes" className="rounded-xl h-64" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl font-semibold">{brand_Name}</h2>
                                
                            </div>
                        </div>
                        </Link>
                    </div>
                
            </div>
        
    );
};

export default BrandCard;