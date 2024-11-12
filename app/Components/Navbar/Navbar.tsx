"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className=" text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-extrabold">FASHION</h1>
                
                <div className="block lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="text-black focus:outline-none"
                    >
                        {menuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
               
                <ul className="hidden lg:flex space-x-8 text-2xl p-4">
                    
                    <li className="pt-3">
                        <Link href="/" >
                            CATALOGUE
                        </Link>
                    </li>
                    <li className="pt-3">
                        <Link href="/" className="">
                            FASHION
                        </Link>
                    </li>
                    <li className="pt-3">
                        <Link href="/" className="">
                            FAVOURITE
                        </Link>
                    </li>
                    <li className="pt-3">
                        <Link href="/" className="">
                            LIFESTYLE
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="">
                            <button className="bg-black  rounded text-white  p-4">SIGN UP</button>
                        </Link>
                    </li>
                </ul>
            </div>
            
            {menuOpen && (
                <div className="lg:hidden">
                    <ul className="flex flex-col space-y-4 mt-4">
                        <li>
                            <Link href="/" className="hover:border-b-2 border-red-700">
                                CATALOGUE
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:border-b-2 border-red-700">
                                FASHION
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:border-b-2 border-red-700">
                                FAVOURITE
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:border-b-2 border-red-700">
                                LIFESTYLE
                            </Link>
                        </li>
                        <li>
                        <Link href="/" className="">
                            <button className="bg-black  rounded text-white  p-4">SIGN UP</button>
                        </Link>
                    </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
