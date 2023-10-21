import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../components/Home";
import AddProduct from "../components/AddProduct";

import Login from "../components/Login";
import Register from "../components/Register";
import BrandProduct from "../components/BrandProduct";
import UpdateProducts from "../components/UpdateProducts";
import Details from "../components/Details";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/brandProduct",
                element: <BrandProduct></BrandProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
    }
])

export default routes;