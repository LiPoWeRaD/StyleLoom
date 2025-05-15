'use client'

import NavigatingCard from "../ul/NavigatingCard"
import Image from "next/image"
import NavigatingImage from "@/assets/Home/Navigating/Navigating.png";
import { OrderingFAQ, ShippingFAQ, ReturnsFAQ, SupportFAQ } from "../data/FAQData";
import FAQCard from "../ul/FAQCard";
import { useState } from "react";
import ArrowDown from "@/assets/ArrowDown.svg";


const FAQ = () => {

    const Categories = ["All", "Ordering", "Shipping", "Returns", "Support"];

    const [active, setActive] = useState(Categories[0]);
    const [visible, setVisible] = useState(false);

    const handleActive = (category: string) => {
        setActive(category);
    }

    return (
        <>
        <div className="relative flex flex-col gap-y-[40px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
            <div className=" flex flex-col gap-y-[30px]  ">
                <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">Have Questions? We Have Answers.</h2>
                <p className="text-grey40 text-[16px] 2xl:text-lg">Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics.</p>
                <Image width={270} height={100} src={NavigatingImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
            </div>
            <ul className="flex flex-wrap gap-3.5">
              <li>
                  <button onClick={() => handleActive(Categories[0])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[0] ? 'bg-brown70 text-black' : ''}`}>{Categories[0]}</button>
              </li>
              <li>
                  <button onClick={() => handleActive(Categories[1])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[1] ? 'bg-brown70 text-black' : ''}`}>{Categories[1]}</button>
              </li>
              <li>
                  <button onClick={() => handleActive(Categories[2])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                    rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[2] ? 'bg-brown70 text-black' : ''}`}>{Categories[2]}</button>
              </li>
              <li>
                  <button onClick={() => handleActive(Categories[3])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                        rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[3] ? 'bg-brown70 text-black' : ''}`}>{Categories[3]}</button>
              </li>
              <li>
                  <button onClick={() => handleActive(Categories[4])} 
                    className={`text-sm md:text-base px-[20px] py-[12px] md:px-[30px] md:py-[18px] 
                        rounded-xl cursor-pointer border-dashed border-2 border-dark15 hover:bg-brown60/50 duration-300 ease-in-out hover:text-black ${active === Categories[4] ? 'bg-brown70 text-black' : ''}`}>{Categories[4]}</button>
              </li>
            </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {(active === Categories[0] || active === Categories[2]) && OrderingFAQ.map((product, index) => (
                <FAQCard 
                    key={index}
                    title={product.title}
                    content={product.content}
                    className="border-t-0"
                    visible={index < 1 || visible}
                />
            ))}
            {(active === Categories[0] || active === Categories[1]) && ShippingFAQ.map((product, index) => (
                <FAQCard 
                    key={index}
                    title={product.title}
                    content={product.content}
                    className="border-t-0"
                    visible={index < 1 || visible}
                />
            ))}
            {(active === Categories[0] || active === Categories[3]) && ReturnsFAQ.map((product, index) => (
                <FAQCard 
                    key={index}
                    title={product.title}
                    content={product.content}
                    className="border-t-0"
                    visible={index < 1 || visible}
                />
            ))}
            {(active === Categories[0] || active === Categories[4]) && SupportFAQ.map((product, index) => (
                <FAQCard 
                    key={index}
                    title={product.title}
                    content={product.content}
                    className="border-t-0"
                    visible={index < 1 || visible}
                />
            ))}
            <button className="text-white text-lg font-medium flex lg:hidden items-center py-8 gap-x-[10px] justify-center cursor-pointer border-dashed border-r-2 border-dark15" onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'View All'} <Image src={ArrowDown} alt="Arrow Down" className={`${visible ? 'rotate-180' : ''}`} />
            </button>
        </div>
        </>
    )
}

export default FAQ;
    