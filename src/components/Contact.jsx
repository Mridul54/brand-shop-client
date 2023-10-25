

const Contact = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="mt-20 mb-9 lg:flex  justify-between bg-emerald-100 p-8 rounded-lg shadow-lg text-white gap-36">
                <div className='flex-1'>
                    <form action="#" className="mb-6">
                        <div className="mb-6">
                            <h1 className='text-2xl flex justify-center text-black font-semibold'>Get in touch</h1>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <div className="relative rounded-lg">
                                <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your email address"
                                required
                                />
                                
                            </div>
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                            >
                                Subject
                            </label>
                            <div className="relative rounded-lg">
                                <input
                                type="text"
                                id="subject"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Let us know how we can help you"
                                required
                                />
                                
                                
                            </div>
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                            >
                                Your message
                            </label>
                            <div className="relative rounded-lg">
                                <textarea
                                id="message"
                                rows="4"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                                ></textarea>
                            
                            
                            </div>
                        </div>
                        <button
                        type="submit"
                        className="text-white bg-emerald-500 hover:bg-emerald-700 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
                        >
                        Send message
                        </button>
                    </form>
                </div>
                <div className="mb-4 flex-1 ">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Information</h2>
                    <h1 className='text-2xl text-black'>Exploration Call</h1>
                    <div className='flex gap-1 items-center mb-5'>
                        <p className='text-black'>01638856507</p>
                    </div>
                    
                    
                    <h1 className='text-2xl text-black'>Email info</h1>
                    <div className='flex items-center gap-1 mb-5 text-black'>
                        electronics@gmail.com
                    </div>
                    <h1 className='text-2xl text-black'>Address</h1>
                    <div className='flex items-center-center '>
                    
                        <h1 className='text-2xl text-black'>House #20 (3rd Floor) <br />
                            Road # 14,<br />
                            Mirpur-2 Dhaka,<br /> 
                            Bangladesh <br />
                            Telephone: +88-02-1230-6091</h1>
                    
                    </div >
                    
                
                </div>
            </div>
        </div>
    );
};

export default Contact;