"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Cube from "@/assets/header/Cube.png";
import Logo from "@/assets/header/Logo.png";
import Burger from "@/assets/header/burger.svg";
import ShoppingCart from "@/assets/header/shoppingCart.svg";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-dark06 ">
        <header className="relative hidden md:grid grid-cols-12 container mx-auto pt-[30px]">
            <div className="overflow-hidden border-b-2 col-start-1 col-span-12 my-[10px] 2xl:my-0 2xl:col-start-2 2xl:col-span-10 border-dashed border-dark15 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
            <div className="hidden 2xl:grid grid-cols-2 grid-rows-2 col-span-1 ">
                <Image className="row-start-2" src={Cube} alt="Cube" />
            </div>
            <ul className="grid grid-cols-4 xl:grid-cols-3 col-span-4 xl:col-span-3 xl:gap-x-3.5 mr-auto ">
                <li className="col-span-2 xl:col-span-1 flex items-center justify-start">
                    <Link className={`text-sm md:text-base px-[30px] py-[18px] rounded-xl min-w-[100px] cursor-pointer ${pathname === "/" ? "bg-dark10" : "border-dashed border-2 border-dark10"}`}  href="/">Home</Link>
                </li>
                <li className="col-span-2 flex items-center justify-start">
                    <Link className={`text-sm md:text-base px-[30px] py-[18px] rounded-xl min-w-[100px] text-center cursor-pointer ${pathname === "/products" ? "bg-dark10" : "border-dashed border-2 border-dark10"}`} href="/products">Products</Link>
                </li>
            </ul>
            <div className="col-span-5 xl:col-span-6 2xl:col-span-4 flex items-center justify-center">
                <Image className="mx-auto" src={Logo} alt="Logo" />
            </div>
            <ul className="grid grid-cols-3 col-span-3 gap-x-3.5 ml-auto">
                <li className="col-span-1 flex items-center justify-end">
                    <Link href="/cart" className="flex items-center justify-center bg-dark10 rounded-xl p-[18px]  ml-auto cursor-pointer">
                        <Image width={24} height={24} className="w-full h-full" src={ShoppingCart} alt="ShoppingCart" />
                    </Link>
                </li>
                <li className="col-span-2 flex items-center justify-end max-w-[120px]">
                    <Link className={`text-black text-center text-sm md:text-base font-bold px-[30px] py-[18px] rounded-xl min-w-[100px] bg-brown60 cursor-pointer ${pathname === "/contact" ? "bg-brown60/50" : ""}`} href="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hidden 2xl:grid grid-cols-2 grid-rows-2 col-span-1">
                <Image className="col-start-2 row-start-2 scale-x-[-1] ml-auto" src={Cube} alt="Cube" />
            </div>
        </header>
        <header className="md:hidden  border-b-2 border-dashed border-dark15 ">
            <div className="grid grid-cols-12 container mx-auto py-[30px]">
                <div className="col-span-6 flex items-center justify-between">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="relative col-span-6 flex flex-col items-end justify-center">
                    <button type="button" className="p-3.5 bg-brown70 rounded-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <Image src={Burger} alt="Burger" width={24} height={24} />
                    </button>
                    <ul className={`z-10 grid grid-cols-1 gap-y-3 absolute top-14 right-1/4 text-center translate-x-1/2 bg-brown70 rounded-2xl p-3.5 text-black text-sm font-bold transition-all duration-300  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                        <li>
                            <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsOpen(false)} href="/products">Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header;
