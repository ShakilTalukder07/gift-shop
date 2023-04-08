import React, { useEffect, useState } from 'react';
import Category from '../../pages/categories/Category';

const SideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/productsCategory")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    // console.log(categories);

    return (
        <div>
            <h1 className="text-4xl my-7">Course Category</h1>
            <div className="bg-orange-100 p-5 h-120">
                {categories.map((category) => (
                    <Category key={category?.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default SideNav;