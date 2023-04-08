import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Categories = () => {
    
    const courses = useLoaderData();

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {courses.map((course) => (
                <SingleProduct key={course?._id} course={course} />
            ))}
        </div>
    );
};

export default Categories;