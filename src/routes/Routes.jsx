import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../components/Home";



import Login from "../components/Login";

import BrandProduct from "../components/BrandProduct";
import UpdateProducts from "../components/UpdateProducts";
import Details from "../components/Details";
import AddProduct from "../components/AddProduct";

import MyCart from "../components/MyCart";
import Registration from "../components/Registration";
import PrivateRoute from "./PrivateRoute";



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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params}) => fetch(`https://brand-shop-server-lik46dzel-mridul544564.vercel.app/product/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/brandProduct",
                element: <BrandProduct></BrandProduct>,
                loader: () => fetch('https://brand-shop-server-lik46dzel-mridul544564.vercel.app/product')
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://brand-shop-server-lik46dzel-mridul544564.vercel.app/product/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            }
            
        ]
    }
])

export default routes;