"use client"

import Btn from "../ul/Btn";
import { useCategoryStore } from "@/store/categoryStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import ElevateImage from "@/assets/Home/Products/Elevate.png";
import ArrowDown from "@/assets/ArrowDown.svg";
import { KidsProducts, MensProducts, WomensProducts } from "../data/ProductsShopData";
import ProductsShop from "../ul/ProductsShop";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";

const ProductsPage = () => {
    const Categories = ["All", "Mens", "Womens", "Kids"];
    const category = useCategoryStore((state) => state.category);
    const [active, setActive] = useState(category);
    const [visible, setVisible] = useState(false);
    

    const allProducts = [...WomensProducts, ...MensProducts, ...KidsProducts];

    const handleActive = (category: string) => {
        setActive(category);
    }
    

    useEffect(() => {
        setActive(category);
    }, [category]);

    const getFilteredProducts = (category: string) => {
        switch(category) {
            case "Mens":
                return MensProducts;
            case "Womens":
                return WomensProducts;
            case "Kids":
                return KidsProducts;
            default:
                return allProducts;
        }
    };

    const filteredProducts = getFilteredProducts(active);


    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center bg-dark06 py-10">
            <section id="Products" className="container border-dashed border-2 border-dark15 rounded-lg">
                <div className="relative flex flex-col gap-y-[40px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
                    <div className="flex flex-col gap-y-[30px]">
                        <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">Explore the Latest Trends and Timeless Classics</h2>
                        <p className="text-grey40 text-[16px] 2xl:text-lg">{`Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics`}</p>
                        <Image width={170} height={100} src={ElevateImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
                    </div>
                    <ul className="flex flex-wrap gap-3.5">
                        {Categories.map((cat) => (
                            <li key={cat}>
                                <button 
                                    onClick={() => handleActive(cat)}
                                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 
                                    duration-300 ease-in-out hover:text-black ${active === cat ? 'bg-brown70 text-black' : ''}`}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col gap-y-4 sm:flex-row justify-between items-center px-[20px] py-[30px] border-dashed border-b-2 border-dark15 col-span-full">
                        <h2 className="text-white text-center sm:text-left text-[24px] sm:text-[26px] 2xl:text-3xl font-medium uppercase tracking-tight">Dress Collection</h2>
                        <Btn className="relative" hrefLink={`/products/all/${active.toLowerCase() === "all" ? "allwear" : active.toLowerCase()}`} >
                            View All
                        </Btn>
                    </div>
                    {filteredProducts.filter(product => product.tag.concat("wear")).map((product, index) => (
                        index < 3 && (
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
                        )
                    ))}
                    <div className="flex justify-between items-center px-[20px] py-[30px] border-dashed border-b-2 border-dark15 col-span-full">
                        <h2 className="text-white text-[24px] sm:text-[26px] 2xl:text-3xl font-medium uppercase tracking-tight">Accessories</h2>
                        <Btn className="relative" hrefLink={`/products/all/Accessories?active=${active.toLowerCase() === "all" ? "all" : active.toLowerCase()}`} >
                            View All
                        </Btn>
                    </div>
                    {filteredProducts.filter(product => product.tag === "Accessories").map((product, index) => (
                        index < 3 && <ProductsShop 
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
                    <div className="flex justify-between items-center px-[20px] py-[30px] border-dashed border-b-2 border-dark15 col-span-full">
                        <h2 className="text-white text-[24px] sm:text-[26px] 2xl:text-3xl font-medium uppercase tracking-tight">Bags and HandBags</h2>
                        <Btn className="relative" hrefLink={`/products/all/BagsandHandBags?active=${active}`} >
                            View All
                        </Btn>
                    </div>
                    {filteredProducts.filter(product => product.tag === "Bags and Hand Bags").map((product, index) => (
                        index < 3 && <ProductsShop 
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
            </section>
            <section id="Testimonials" className="container border-dashed border-2 border-dark15 rounded-lg border-r-0">
                <Testimonials />
            </section>
            <section id="FAQ" className="container border-dashed border-2 border-r-0 border-dark15 rounded-lg ">
                <FAQ />
            </section>
            <section id="CTA" className="container mb-[100px]">
                <CTA />
            </section>
        </main>
    )
}

export default ProductsPage;