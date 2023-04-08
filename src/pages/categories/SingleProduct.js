import React from 'react';

const SingleProduct = ({ product }) => {
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-black text-red-100">
            {product.length}
        </div>
    );
};

export default SingleProduct;