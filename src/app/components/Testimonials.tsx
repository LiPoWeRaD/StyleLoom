'use client'

import Image from "next/image";
import TestimonialsImage from "@/assets/Home/Testimonials/Testimonials.png";
import { TestimonialspeopleData } from "../data/TestimonialspeopleData";
import TestimonialsCard from "../ul/TestimonialsCard";
import ArrowDown from "@/assets/ArrowDown.svg";
import { useState } from "react";
const Testimonials = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <div className="relative flex flex-col gap-y-[40px] px-[20px] py-[30px] lg:p-20 border-dashed border-r-2 border-dark15">
            <div className=" flex flex-col gap-y-[30px]  ">
                <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">The StyleLoom Testimonial Collection.</h2>
                <p className="text-grey40 text-[16px] 2xl:text-lg">At StyleLoom, our customers are the heartbeat of our brand.</p>
                <Image width={270} height={100} src={TestimonialsImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 border-dashed border-t-2 border-dark15 ">
            {TestimonialspeopleData.map((item,index) => (
                <TestimonialsCard key={index} {...item} className="border-dashed border-2 border-dark15 border-t-0 border-l-0 " visible={index < 3 || visible} />
            ))}
            <button className="text-white text-lg font-medium flex lg:hidden items-center py-8 gap-x-[10px] justify-center cursor-pointer border-dashed border-r-2 border-dark15" onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'View All'} <Image src={ArrowDown} alt="Arrow Down" className={`${visible ? 'rotate-180' : ''}`} />
            </button>
        </div>
        </>
    )
}

export default Testimonials;