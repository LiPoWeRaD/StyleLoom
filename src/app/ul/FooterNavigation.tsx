import ShareIcon from "@/assets/Shape.svg"
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import React from "react";


interface FooterNavigationProps {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
    className?: string;
}

const FooterNavigation:FC<FooterNavigationProps> = ({title, links, className}) => {
    return (
        <div className={`flex flex-col gap-10 ${className}`}>
            <h3 className="text-white text-lg font-medium">{title}</h3>
            <ul className="flex gap-x-[10px] items-center text-grey40">
                {links.map((link, idx) => (
                    <React.Fragment key={link.href}>
                        <li>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                        {idx !== links.length - 1 && (
                            <li key={'icon-' + idx} aria-hidden>
                                <Image src={ShareIcon} alt="" className="w-1.5 h-1.5" />
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}

export default FooterNavigation;


