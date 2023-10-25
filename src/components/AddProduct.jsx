import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = {name, brand, category, price, description, photo, rating}
        console.log(newProduct)

        //send data to the server
        fetch('https://brand-shop-server-lik46dzel-mridul544564.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }


    return (
        <div className="bg-emerald-100 p-24 mt-10 max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center pb-10 ">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
            <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Photo URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                <div className="flex gap-5 pb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl"> Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Brand Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 pb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl"> Category</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Price</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 pb-10">
                    <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Short Description</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" placeholder="Short Description" name="description" className="input input-bordered w-full" />
                            </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Rating</span>
                        </label>
                        <div className="rating rating-lg rating-half">
                            
                            <input type="radio" name="rating" className="rating-hidden" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>
                    </div>
                </div>
                
                <input type="submit" value="Add Product" className="btn btn-block bg-emerald-500 hover:bg-emerald-700 text-white" />
            </form>
        </div>
    );
};

export default AddProduct;