"use client"

import InfiniteMarquee from "./InfiniteMarquee";
import Logo from "@/assets/Footer/Logo.svg"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import FooterNavigation from "../ul/FooterNavigation";
import ArrowDown from "@/assets/ArrowDown.svg"

const Footer = () => {
    return (
        <footer className="bg-dark06">
            <section>
                <InfiniteMarquee />
            </section>
            <section>
                <div className="grid grid-cols-12 container mx-auto py-[100px] gap-y-[30px]">
                    <div className="col-span-12 md:col-span-6">
                        <Image width={78} height={78} className="w-full h-full" src={Logo} alt="Logo" />
                    </div>
                    <ul className="col-span-12 md:col-span-6 flex gap-4 items-center md:justify-end">
                        <li className="p-4 bg-brown80 rounded-2xl h-fit cursor-pointer hover:bg-brown70 transition-all duration-300 ease-in-out text-dark06 hover:text-dark10">
                            <FaInstagram className="w-[34px] h-[34px] fill-current transition-colors duration-300" />
                        </li>
                        <li className="p-4 bg-brown80 rounded-2xl h-fit cursor-pointer hover:bg-brown70 transition-all duration-300 ease-in-out text-dark06 hover:text-dark10">
                            <FaFacebookF className="w-[34px] h-[34px] fill-current transition-colors duration-300" />
                        </li>
                        <li className="p-4 bg-brown80 rounded-2xl h-fit cursor-pointer hover:bg-brown70 transition-all duration-300 ease-in-out text-dark06 hover:text-dark10">
                            <FaTwitter className="w-[34px] h-[34px] fill-current transition-colors duration-300" />
                        </li>
                        <li className="p-4 bg-brown80 rounded-2xl h-fit cursor-pointer hover:bg-brown70 transition-all duration-300 ease-in-out text-dark06 hover:text-dark10">
                            <FaYoutube className="w-[34px] h-[34px] fill-current transition-colors duration-300" />
                        </li>
                    </ul>
                </div>
            </section>
            <section className="border-dashed border-y-2 py-[60px] border-dark15">
                <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-y-[30px]">
                    <FooterNavigation 
                        className="col-span-1" 
                        title="About Us" 
                        links={[{label: "Why Us", href: "/#Hero"}, {label: "About Us", href: "/#Features"}, {label: "Testimonials", href: "/#Testimonials"}, {label: "FAQ’s", href: "/#FAQ"}]} 
                    />
                    <FooterNavigation 
                        className="col-span-1" 
                        title="Products" 
                        links={[{label: "Menswear", href: "/products/all/mens"}, {label: "Womenswear", href: "/products/all/womens"}, {label: "Kidswear", href: "/products/all/kids"}]} 
                    />
                    <div className="col-span-1 flex flex-col gap-6">
                        <h3 className="text-white text-lg font-medium">Subscribe to Newsletter</h3>
                        <form>
                            <label className="relative bg-dark15 rounded-lg p-4 flex items-center" htmlFor="email">
                                <input className="bg-transparent outline-none text-white px-5 w-11/12" type="email" id="email" placeholder="Your Email" />
                                <Image className="absolute right-5 top-1/2 -translate-y-1/2 -rotate-90" src={ArrowDown} alt="Arrow Down" />
                            </label>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-12 container mx-auto py-[40px] gap-y-[30px]">
                    <div className="col-span-12 md:col-span-6">
                        <p className="text-grey40 text-lg font-medium">© 2024 StyleLoom. All rights reserved.</p>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <ul className="flex items-center md:justify-end">
                            <li className="text-grey40 text-lg font-medium border-r-2 border-dark15 pr-2.5">
                                <Link href="/terms">Terms of Service</Link>
                            </li>
                            <li className="text-grey40 text-lg font-medium pl-2.5">
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
