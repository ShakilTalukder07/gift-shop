import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/about/AboutUs";
import Products from "../pages/products/Products";

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
            },
            {
                path: "/products",
                element: <Products></Products>
            },
        ]
    }
])