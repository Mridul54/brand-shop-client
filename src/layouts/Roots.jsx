import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../components/Footer';

const Roots = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;