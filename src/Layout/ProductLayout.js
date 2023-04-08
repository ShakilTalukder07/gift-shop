import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/sideNav/SideNav';

const ProductLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="main-container">
                <div className="main-element">
                    <SideNav></SideNav>
                </div>
                <div className="sidenav lg:block hidden">
                    <Outlet />
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default ProductLayout;