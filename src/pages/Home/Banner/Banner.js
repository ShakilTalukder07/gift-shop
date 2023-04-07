import React from 'react';
import giftBox from '../../../assets/giftBox.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#ECACAB]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-full md:w-1/2 lg:w-1/2 h-full' src={giftBox} alt=''/>
                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Find Your Own Happiness</h1>
                        <p className="py-6">The best gifts for those you love. Desire gift delivery daily <br /> and around a clock.</p>
                        <Link className="bg-white text-black p-4">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;