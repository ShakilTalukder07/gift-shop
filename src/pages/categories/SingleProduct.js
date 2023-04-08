import React from 'react';

const SingleProduct = ({ product }) => {

    const { image_url, price, title, details, rating } = product

    return (
        <div className=" shadow-md">
            <img src={image_url} alt="" />
            {/* <h1 className='text-xl'>{rating}</h1> */}
            <h1 className='text-xl'>{title}</h1>
            <h1 className='text-xl'>{price}</h1>
        </div>
    );
};

export default SingleProduct;