import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    return (
        <nav className="w-full
                            sticky-top
                            items-center
                            flex flex-wrap
                            justify-between
                            py-4
                          bg-gray-100
                          text-gray-500
                          hover:text-gray-700
                          focus:text-gray-700
                            shadow-lg
                            navbar navbar-expand-lg navbar-light
  ">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className=" text-gray-500
                                      cursor-pointer
                                      border-0
                                      navbar-toggler
                                      hover:shadow-none hover:no-underline
                                      py-2
                                      px-2.5
                                      bg-transparent
                                      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <Link to='/' className="flex
                                    cursor-pointer
                                     items-center
                                    text-gray-900
                                    hover:text-gray-900
                                    focus:text-gray-900
                                      mt-2
                                      lg:mt-0
                                      mr-1">
                        <img src="https://i.ibb.co/4R7Lppg/warehouse.png" style={{ height: '25px' }} alt=""
                            loading="lazy" />
                        <h1 className='font-bold ml-2'>Smart Inventory</h1>
                    </Link>
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item p-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="allitems">Items</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="about">About us</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>
                {
                    user ?
                        <div className="flex items-center relative">
                            <div className="dropdown relative">
                                <Link className="dropdown-toggle flex items-center hidden-arrow" to="#" id="dropdownMenuButton2" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <div>
                                        <img
                                            src={user?.photoURL || 'https://i.ibb.co/GndbNbD/avatar-ge95b7d95a-640.png'}
                                            className="rounded-full w-12 mb-4 mx-auto"
                                            alt="Avatar"
                                        />

                                    </div>
                                </Link>
                                <ul className=" dropdown-menu
                                    min-w-max
                                    absolute
                                  bg-white
                                    text-base
                                    z-50
                                    float-left
                                    py-2
                                    list-none
                                    text-left
                                    rounded-lg
                                    shadow-lg
                                    mt-1
                                    hidden
                                    bg-clip-padding
                                    border-none
                                    right-0" aria-labelledby="dropdownMenuButton2">
                                    <li className="text-xl text-orange-600 leading-tight mb-2 dropdown-item
                                             underline 
                                             underline-offset-8
                                             text-center
                                             py-2
                                             px-4
                                             font-normal
                                             block
                                             w-full
                                             whitespace-nowrap
                                             bg-transparent
                                           hover:bg-gray-100">
                                        {user?.displayName}
                                    </li>
                                    <li>
                                        <Link className="dropdown-item
                                             text-sm
                                             py-2
                                             px-4
                                             font-normal
                                             block
                                             w-full
                                             whitespace-nowrap
                                             bg-transparent
                                           text-gray-700
                                           hover:bg-gray-100" to="/myitems">My Items</Link>
                                    </li>
                                    <li>
                                        <Link className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                          first-letter:text-gray-700
                                          hover:bg-gray-100" to="/manageitem">Manage Item</Link>
                                    </li>
                                    <li>
                                        <Link className="
                                             dropdown-item
                                             text-sm
                                             py-2
                                             px-4
                                             font-normal
                                             block
                                             w-full
                                             whitespace-nowrap
                                             bg-transparent
                                           text-gray-700
                                           hover:bg-gray-100" to="additem">Add Item</Link>
                                    </li>
                                    <li>
                                        <button onClick={() => signOut(auth)} className="
                                                dropdown-item
                                                text-sm
                                                py-2
                                                px-4
                                                font-normal
                                                block
                                                w-full
                                                whitespace-nowrap
                                                bg-transparent
                                              text-gray-700
                                              hover:bg-gray-100">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :

                        <button onClick={() => navigate('/login')} className='bg-yellow-500 p-2 rounded-sm'>Login</button>

                }


            </div>
        </nav>

    );
};

export default Header;