import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (

        // <div className="navbar bg-secondary">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li><Link to={'/generateimage'}>Image Generator</Link></li>
        //                 <li tabIndex={0}>
        //                     <a className="justify-between">
        //                         Parent
        //                         <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        //                     </a>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost normal-case text-xl"><Link to={'/'}>Main page</Link></a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             <li><Link to={'/generateimage'}>Image Generator</Link></li>
        //             <li><a>test</a></li>
        //             <li><a>test</a></li>

        //         </ul>
        //     </div>
        //     {/* <div className="navbar-end">
        //         <a className="btn">Info</a>
        //     </div> */}





        // </div>

        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 bg-secondary">
            <Link className="block text-teal-600 p-5 rounded transition" to={"/"}>Home</Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Site Nav" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li><Link className="hover:text-gray-500/75 p-5 rounded hover:bg-neutral" to={"/generateimage"}>Image Generator</Link></li>
                        {/* <li><a className="text-gray-500 transition hover:text-gray-500/75" href="/">About</a></li> */}
                    </ul>
                </nav>

                {/* <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <a
                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                            href="/"
                        >
                            Login
                        </a>

                        <a
                            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                            href="/"
                        >
                            Register
                        </a>
                    </div>

                    <button
                        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                    </button>
                </div> */}
            </div>
        </div>


    )
}

export default NavBar