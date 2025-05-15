import { FC } from "react";
import ArrowRight from "@/assets/Arrow.svg";
import Line from "@/assets/Line.svg";
import Image from "next/image";
import Link from "next/link";


interface BtnProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    hrefLink?: string;
}

const Btn:FC<BtnProps> = ({children, className, onClick, disabled, type, hrefLink}) => (
    hrefLink ? (
        <Link href={hrefLink} className={`flex items-center gap-x-1 justify-center rounded-[12px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] text-white text-sm 2xl:text-[16px] bg-dark12 
            font-medium border-dashed border-2 border-brown60/20 hover:bg-dark10 hover:border-dark10 transition-all duration-300 cursor-pointer ${className}`}>
            {children}
            <Image src={ArrowRight} alt="Arrow Right" />
            <div className="absolute inset-0 pointer-events-none">
                <Image src={Line} alt="Line" className="absolute -top-[1px] -left-[1px]" />
                <Image src={Line} alt="Line" className="absolute -top-[1px] -right-[1px] rotate-90" />
                <Image src={Line} alt="Line" className="absolute -bottom-[1px] -left-[1px] -rotate-90" />
                <Image src={Line} alt="Line" className="absolute -bottom-[1px] -right-[1px] -rotate-180" />
            </div>
        </Link>
    ) : (
        <button
            className={`flex items-center gap-x-1 justify-center rounded-[12px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] text-white text-sm 2xl:text-[16px] bg-dark12 
                font-medium border-dashed border-2 border-brown60/20 hover:bg-dark10 hover:border-dark10 transition-all duration-300 cursor-pointer ${className}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
            <Image src={ArrowRight} alt="Arrow Right" />
            <div className="absolute inset-0 pointer-events-none">
                <Image src={Line} alt="Line" className="absolute -top-[1px] -left-[1px]" />
                <Image src={Line} alt="Line" className="absolute -top-[1px] -right-[1px] rotate-90" />
                <Image src={Line} alt="Line" className="absolute -bottom-[1px] -left-[1px] -rotate-90" />
                <Image src={Line} alt="Line" className="absolute -bottom-[1px] -right-[1px] -rotate-180" />
            </div>
        </button>
    )
);

export default Btn;