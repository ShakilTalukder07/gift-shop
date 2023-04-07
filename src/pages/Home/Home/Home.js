import React from 'react';
import Banner from '../Banner/Banner';
import ItemBanner from '../ItemBanner/ItemBanner';
import OrderSystem from '../orderSystem/OrderSystem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ItemBanner></ItemBanner>
            <OrderSystem></OrderSystem>
        </div>
    );
};

export default Home;