import React from 'react';

const BrandCard = ({brand}) => {
    const {image, brand_Name} = brand;
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">
            <div  className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-64" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-semibold">{brand_Name}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default BrandCard;