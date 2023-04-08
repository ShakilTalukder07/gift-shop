import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Categories = () => {

    const products = useLoaderData();

    console.log(products);

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {products.map((product) => (
                <SingleProduct
                    key={product?._id}
                    course={product}
                />
            ))}
        </div>
    );
};

export default Categories;