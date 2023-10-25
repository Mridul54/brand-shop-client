import React from 'react';

const Service = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-5xl text-center my-10 font-extrabold'>Our Services</h1>
        <div className='flex justify-between gap-10'>
            
            
            <div className='bg-emerald-200 text-center rounded-xl'>
                <img className='w-32 h-32 ml-28 my-10' src="https://i.ibb.co/cFjCVB5/frutiger-aero-icons-whole-icon-pack-is-available-v0-h7uylg1er2sa1.png" alt="" />
                <h1 className='font-bold text-lg'>Aero Kit Installation</h1>
                <p className='px-5 pb-10'>This process can improve downforce, stability, and fuel efficiency while giving the car a sportier look. It's a popular modification among automotive enthusiasts and racers.</p>

            </div>
            <div className='bg-emerald-200 text-center rounded-xl'>
                <img className='w-32 h-32 ml-28 my-10' src="https://i.ibb.co/9nJcx35/png-transparent-management-computer-icons-service-customer-technology-consulting-search-engine-optim.png" alt="" />
                <h1 className='font-bold text-lg'>Vehicle Trade-in</h1>
                <p className='px-5 pb-10'>This process can improve downforce, stability, and fuel efficiency while giving the car a sportier look. It's a popular modification among automotive enthusiasts and racers.</p>
            </div>
            <div className='bg-emerald-200 text-center rounded-xl'>
                <img className='w-32 h-32 ml-28 my-10' src="https://i.ibb.co/Kjyp1wD/nanoparticles-icon-on-white-260nw-1216854280.webp" alt="" />
                <h1 className='font-bold text-lg'>Carbon fiber Bodywork</h1>
                <p className='px-5 pb-10'>This process can improve downforce, stability, and fuel efficiency while giving the car a sportier look. It's a popular modification among automotive enthusiasts and racers.</p>
            </div>
        </div>
        </div>
    );
};

export default Service;