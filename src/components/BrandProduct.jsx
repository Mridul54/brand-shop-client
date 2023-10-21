import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { useState } from "react";


const BrandProduct = () => {

    const brandPro = useLoaderData();
    const [brandProducts, setBrandProducts] = useState(brandPro);
    
    return (
        <div>
            <h1 className='text-6xl text-emerald-300 my-10 text-center'>brand wise products</h1>
            <div  className="grid md:grid-cols-2 gap-5">
                {
                    brandProducts.map(product => <Products key={product._id} product={product}
                    brandProducts={brandProducts}
                    setBrandProducts={setBrandProducts}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default BrandProduct;