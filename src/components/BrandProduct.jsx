import { Link, useLoaderData } from "react-router-dom";
import Products from "./Products";
import { useState } from "react";
import Swal from "sweetalert2";


const BrandProduct = () => {

    const brandPro = useLoaderData();
    const [brandProducts, setBrandProducts] = useState(brandPro);
    const [brandProduct, setBrandProduct] =useState();

    const {_id, name, brand, category, price, description, photo, rating} = brandPro;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )

            fetch(`https://brand-shop-server-lik46dzel-mridul544564.vercel.app/product/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                    )
                    const remaining = brandProduct.filter(pro => pro._id !== _id);
                    setBrandProduct(remaining);
                }
            })


            }
          })
    }
    
    return (
        <div>
            <h1 className='text-6xl text-emerald-300 my-10 text-center'>brand wise products</h1>
            <div  className="grid md:grid-cols-2 gap-5">
                {
                    brandProducts.map(product => <Products key={product._id} product={product}
                    brandProducts={brandProducts}
                    setBrandProducts={setBrandProducts}
                    >
                         <div>
            <div className="card card-side bg-base-100 shadow-xl h-96 w-full">
                <figure><img className="w-60 h-64" src={photo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title mt-14">{name}</h2>
                    <h3>Brand Name: {brand}</h3>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <p>Price: {price}</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                    <div className="mb-10 ">
                    <div className="btn-group space-x-8">
                        <Link to={`/details/${_id}`}>
                           <button className="btn btn-active ">Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                           <button className="btn btn-neutral ">Update</button>
                        </Link>
                        <button
                         onClick={() => handleDelete(_id)} className="btn bg-orange-500">Delete</button>
                    </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
                    </Products>)
                }
            </div>
        </div>
    );
};

export default BrandProduct;