import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import Loading from '../../components/Loader/Loading';

const Categories = () => {

    const products = useLoaderData();

    console.log(products);

    // if(Loading){
    //     return <Loading></Loading>
    // }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-[80px] ml-10">
            {
                products.map((product) => <SingleProduct
                    key={product._id}
                    product={product}
                ></SingleProduct>)
            }
        </div>
    );
};

export default Categories;