import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SideNav from '../components/sideNav/SideNav';
import { Outlet } from 'react-router-dom';

const ProductLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className='bg-[#ECACAB] py-14'>
                    <h1 className='text-3xl text-white text-center font-semibold'>PRODUCTS</h1>
                    <p className='text-white text-center mt-2'>Home / Products</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <SideNav></SideNav>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductLayout;