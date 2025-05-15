"use client";

import { FC, useRef, useEffect } from "react";
import ArrowRight from "@/assets/Arrow.svg";
import Line from "@/assets/Line.svg";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";


interface BtnProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    hrefLink?: string;
}

const Btn:FC<BtnProps> = ({children, className, onClick, disabled, type, hrefLink}) => {
    const arrowRef = useRef<HTMLImageElement>(null);
    const lineRefs = [useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null)];
    const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

    useEffect(() => {
        // Начальное состояние
        gsap.set(arrowRef.current, { x: 0, opacity: 1 });
        lineRefs.forEach(ref => {
            gsap.set(ref.current, { scale: 1, opacity: 1 });
        });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(arrowRef.current, { x: 8, duration: 0.4, ease: "power2.out" });
        lineRefs.forEach((ref, i) => {
            gsap.to(ref.current, { scale: 1.1, opacity: 1, duration: 0.4, delay: i * 0.05, ease: "power2.out" });
        });
    };
    const handleMouseLeave = () => {
        gsap.to(arrowRef.current, { x: 0, duration: 0.4, ease: "power2.inOut" });
        lineRefs.forEach((ref) => {
            gsap.to(ref.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.inOut" });
        });
    };

    return (
        hrefLink ? (
            <Link
                href={hrefLink}
                ref={btnRef as any}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`flex items-center gap-x-1 justify-center rounded-[12px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] text-white text-sm 2xl:text-[16px] bg-dark12 
            font-medium border-dashed border-2 border-brown60/20 hover:bg-dark10 hover:border-dark10 transition-all duration-300 cursor-pointer ${className}`}
            >
                {children}
                <Image src={ArrowRight} alt="Arrow Right" ref={arrowRef} />
                <div className="absolute inset-0 pointer-events-none">
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -left-[1px]" ref={lineRefs[0]} />
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -right-[1px] rotate-90" ref={lineRefs[1]} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -left-[1px] -rotate-90" ref={lineRefs[2]} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -right-[1px] -rotate-180" ref={lineRefs[3]} />
                </div>
            </Link>
        ) : (
            <button
                ref={btnRef as any}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`flex items-center gap-x-1 justify-center rounded-[12px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] text-white text-sm 2xl:text-[16px] bg-dark12 
                font-medium border-dashed border-2 border-brown60/20 hover:bg-dark10 hover:border-dark10 transition-all duration-300 cursor-pointer ${className}`}
                onClick={onClick}
                disabled={disabled}
                type={type}
            >
                {children}
                <Image src={ArrowRight} alt="Arrow Right" ref={arrowRef} />
                <div className="absolute inset-0 pointer-events-none">
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -left-[1px]" ref={lineRefs[0]} />
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -right-[1px] rotate-90" ref={lineRefs[1]} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -left-[1px] -rotate-90" ref={lineRefs[2]} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -right-[1px] -rotate-180" ref={lineRefs[3]} />
                </div>
            </button>
        )
    );
};

export default Btn;