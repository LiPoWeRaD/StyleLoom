'use client'

import CraftingTrendsCard from "../ul/CraftingTrendsCard";

import Passionate from "@/assets/Home/Crafting/Passionate.png";
import PassionateIcon from "@/assets/Home/Crafting/Passionate.svg";
import Fashion from "@/assets/Home/Crafting/Fashion.png";
import FashionIcon from "@/assets/Home/Crafting/Fashion.svg";
import CustomerCentric from "@/assets/Home/Crafting/CustomerCentric.png";
import CustomerCentricIcon from "@/assets/Home/Crafting/CustomerCentric.svg";
import Global from "@/assets/Home/Crafting/Global.png";
import GlobalIcon from "@/assets/Home/Crafting/Global.svg";
import ArrowDown from "@/assets/ArrowDown.svg";
import Empowering from "@/assets/Home/Crafting/Empowering.png";
import EmpoweringIcon from "@/assets/Home/Crafting/Empowering.svg";
import Sustainable from "@/assets/Home/Crafting/Sustainable.png";
import SustainableIcon from "@/assets/Home/Crafting/Sustainable.svg";
import { useState } from "react";
import Image from "next/image";


const CraftingTrends = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="flex flex-col gap-y-[32px]">
            <div className="flex flex-col gap-y-[16px] px-[20px] py-[30px] lg:p-20">
                <h2 className="text-white text-5xl font-medium uppercase">Crafting Trends, Inspiring Confidence</h2>
                <p className="text-grey40 text-lg">Explore a world of fashion at StyleLoom, where trends meet affordability.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
                <CraftingTrendsCard 
                    image={Passionate.src} 
                    title="Passionate Craftsmanship" 
                    description="Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation." 
                    icon={PassionateIcon.src} 
                    className="border-2 border-l-0"
                />
                <CraftingTrendsCard 
                    image={Fashion.src} 
                    title="Fashion Forward" 
                    description="We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence." 
                    icon={FashionIcon.src} 
                    className="border-2 border-l-0"
                />
                <CraftingTrendsCard 
                    image={CustomerCentric.src} 
                    title="Customer-Centric Approach" 
                    description="Our commitment to customer satisfaction is at the heart of everything we do. We listen, we respond, and we deliver excellence." 
                    icon={CustomerCentricIcon.src} 
                    className="border-2 border-x-0"
                />
                <CraftingTrendsCard 
                    image={Global.src} 
                    title="Global Inspiration" 
                    description="Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world." 
                    icon={GlobalIcon.src} 
                    className="border-r-2 border-b-2 lg:border-b-0"
                    visible={visible}
                />
                <CraftingTrendsCard 
                    image={Empowering.src} 
                    title="Empowering Your Style" 
                    description="Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion." 
                    icon={EmpoweringIcon.src} 
                    className="border-b-2 lg:border-b-0 lg:border-r-2"
                    visible={visible}
                />
                <CraftingTrendsCard 
                    image={Sustainable.src} 
                    title="Sustainable Practices" 
                    description="StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process." 
                    icon={SustainableIcon.src} 
                    className="border-b-2 lg:border-b-0"
                    visible={visible}
                />
                <button className="text-white text-lg font-medium flex lg:hidden items-center py-8 gap-x-[10px] justify-center cursor-pointer" onClick={() => setVisible(!visible)}>
                    {visible ? 'Hide' : 'View All'} <Image src={ArrowDown} alt="Arrow Down" className={`${visible ? 'rotate-180' : ''}`} />
                </button>
            </div>
        </div>
    )
}

export default CraftingTrends;