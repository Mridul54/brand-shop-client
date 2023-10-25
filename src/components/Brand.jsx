import React, { useEffect, useState } from 'react';
import BrandCard from './BrandCard';
import { useLoaderData } from 'react-router-dom';

const Brand = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBrands(data));
    }, [])

    
    
    return (
        
        <div  className='my-10'>
            <h1 className='text-5xl font-bold text-center text-zinc-700 my-10'>Electronics Brands</h1>
            <div className='grid md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;