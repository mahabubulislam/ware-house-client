import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="h-['100vh']">
            <footer className="bg-blue-300 text-center lg:text-left">
                <div className="px-6 pt-6">
                    <form action="">
                        <div className="flex flex-col md:flex-row  items-center">
                            <div className="md:ml-auto md:mb-6">
                                <p className="text-gray-800">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="md:mb-6 mx-3">
                                <input
                                    type="text"
                                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                                    id="exampleFormControlInput1"
                                    placeholder="Email address" />
                            </div>

                            <div className="md:mr-auto mb-6">
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container p-6">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2">
                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800">Contact</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <p>Contact us </p>


                                </li>
                                <li>
                                    <p>Phone: 01112121</p>
                                </li>
                                <li>
                                    <p>Email: smart@inventory.com</p>
                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800">About</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <Link to="about" className="text-blue-600">About</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800">Useful Links</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <Link to="/" className="text-blue-600">Home</Link>
                                </li>
                                <li>
                                    <Link to="/items" className="text-blue-600">Items</Link>
                                </li>
                                <li>
                                    <Link to="/blogs" className="text-blue-600">Blogs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700 text-center p-4 bg-green-200">
                    &copy; {year} Copyright:
                    <Link className="text-gray-800" to="/"> Smart Inventory</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;