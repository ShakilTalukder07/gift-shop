import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/about/AboutUs";
import ProductLayout from "../Layout/ProductLayout";
import Categories from "../pages/categories/Categories";
import Products from "../pages/Products/Products";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "/products",
        element: <ProductLayout></ProductLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/products",
                element: <Products></Products>,
                // loader: fetch("http://localhost:5000/products")
            },
            {
                path: "/products/category/:id",
                element: <Categories></Categories>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    }
])