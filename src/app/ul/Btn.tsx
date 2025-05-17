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
    arrow?: boolean;
}

const Btn: FC<BtnProps> = ({children, className, onClick, disabled, type, hrefLink, arrow = true}) => {
    const arrowRef = useRef<HTMLImageElement>(null);
    const lineRef1 = useRef<HTMLImageElement>(null);
    const lineRef2 = useRef<HTMLImageElement>(null);
    const lineRef3 = useRef<HTMLImageElement>(null);
    const lineRef4 = useRef<HTMLImageElement>(null);
    const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

    useEffect(() => {
        // Начальное состояние
        gsap.set(arrowRef.current, { x: 0, opacity: 1 });
        [lineRef1, lineRef2, lineRef3, lineRef4].forEach(ref => {
            gsap.set(ref.current, { scale: 1, opacity: 1 });
        });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(arrowRef.current, { x: 8, duration: 0.4, ease: "power2.out" });
        [lineRef1, lineRef2, lineRef3, lineRef4].forEach((ref, i) => {
            gsap.to(ref.current, { scale: 1.1, opacity: 1, duration: 0.4, delay: i * 0.05, ease: "power2.out" });
        });
    };

    const handleMouseLeave = () => {
        gsap.to(arrowRef.current, { x: 0, duration: 0.4, ease: "power2.inOut" });
        [lineRef1, lineRef2, lineRef3, lineRef4].forEach((ref) => {
            gsap.to(ref.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.inOut" });
        });
    };

    return (
        hrefLink ? (
            <Link
                href={hrefLink}
                ref={btnRef as React.RefObject<HTMLAnchorElement>}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`flex items-center gap-x-1 justify-center rounded-[12px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] text-white text-sm 2xl:text-[16px] bg-dark12 
            font-medium border-dashed border-2 border-brown60/20 hover:bg-dark10 hover:border-dark10 transition-all duration-300 cursor-pointer ${className}`}
            >
                {children}
                {arrow && <Image src={ArrowRight} alt="Arrow Right" ref={arrowRef} />}
                <div className="absolute inset-0 pointer-events-none">
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -left-[1px]" ref={lineRef1} />
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -right-[1px] rotate-90" ref={lineRef2} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -left-[1px] -rotate-90" ref={lineRef3} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -right-[1px] -rotate-180" ref={lineRef4} />
                </div>
            </Link>
        ) : (
            <button
                ref={btnRef as React.RefObject<HTMLButtonElement>}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`flex items-center gap-x-1 justify-center rounded-[12px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] text-white text-sm 2xl:text-[16px] bg-dark12 
                font-medium border-dashed border-2 border-brown60/20 hover:bg-dark10 hover:border-dark10 transition-all duration-300 cursor-pointer ${className}`}
                onClick={onClick}
                disabled={disabled}
                type={type}
            >
                {children}
                {arrow && <Image src={ArrowRight} alt="Arrow Right" ref={arrowRef} />}
                <div className="absolute inset-0 pointer-events-none">
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -left-[1px]" ref={lineRef1} />
                    <Image src={Line} alt="Line" className="absolute -top-[1px] -right-[1px] rotate-90" ref={lineRef2} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -left-[1px] -rotate-90" ref={lineRef3} />
                    <Image src={Line} alt="Line" className="absolute -bottom-[1px] -right-[1px] -rotate-180" ref={lineRef4} />
                </div>
            </button>
        )
    );
};

export default Btn;