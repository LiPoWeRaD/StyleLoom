"use client";


import Image from "next/image";
import ElevateImage from "@/assets/Home/Products/Elevate.png";
import { useState } from "react";
import ArrowDown from "@/assets/ArrowDown.svg";
import ProductsShop from "../ul/ProductsShop";
import { KidsProducts, MensProducts, WomensProducts } from "../data/ProductsShopData";


const Products = () => {
    const Categories = ["All", "Mens", "Womens", "Kids"];

    const [active, setActive] = useState(Categories[0]);
    const [visible, setVisible] = useState(false);

    const handleActive = (category: string) => {
        setActive(category);
    }

    const handleVisible = () => {
        setVisible(!visible);
    }

    return (
        <>
        <div className="relative flex flex-col gap-y-[40px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
            <div className=" flex flex-col gap-y-[30px]  ">
                <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">Elevate Your Style with Our Latest Collection</h2>
                <p className="text-grey40 text-[16px] 2xl:text-lg">Each piece is crafted to enhance your fashion statement.</p>
                <Image width={170} height={100} src={ElevateImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
            </div>
            <ul className="flex gap-x-3.5">
              <li>
                  <button onClick={() => handleActive(Categories[0])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[0] ? 'bg-brown70 text-black' : ''}`}>All</button>
              </li>
              <li>
                  <button onClick={() => handleActive(Categories[1])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[1] ? 'bg-brown70 text-black' : ''}`}>Mens</button>
              </li>
              <li>
                  <button onClick={() => handleActive(Categories[2])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[2] ? 'bg-brown70 text-black' : ''}`}>Womens</button>
              </li>
              <li>
                  <button onClick={() => handleActive(Categories[3])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[3] ? 'bg-brown70 text-black' : ''}`}>Kids</button>
              </li>
            </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {(active === Categories[0] || active === Categories[2]) && WomensProducts.map((product, index) => (
                <ProductsShop 
                    key={index}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    tag={product.tag}
                    fit={product.fit}
                    link={product.link}
                    className="border-t-0"
                    visible={index < 3 || visible}
                />
            ))}
            {(active === Categories[0] || active === Categories[1]) && MensProducts.map((product, index) => (
                <ProductsShop 
                    key={index}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    tag={product.tag}
                    fit={product.fit}
                    link={product.link}
                    className="border-t-0"
                    visible={index < 3 || visible}
                />
            ))}
            {(active === Categories[0] || active === Categories[3]) && KidsProducts.map((product, index) => (
                <ProductsShop 
                    key={index}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    tag={product.tag}
                    fit={product.fit}
                    link={product.link}
                    className="border-t-0"
                    visible={index < 3 || visible}
                />
            ))}
            <button className="text-white text-lg font-medium flex lg:hidden items-center py-8 gap-x-[10px] justify-center cursor-pointer" onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'View All'} <Image src={ArrowDown} alt="Arrow Down" className={`${visible ? 'rotate-180' : ''}`} />
            </button>
        </div>
        </>
    )
}

export default Products;