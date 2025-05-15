// "use client";

import { FC } from "react";
import { TestimonialspeopleData } from "../data/TestimonialspeopleData";
import Image from "next/image";
import Stars from "@/assets/Stars.svg";
import Twitter from "@/assets/Twiter.svg";
import Link from "next/link";

const TestimonialsCard:FC<TestimonialspeopleData> = ({image,name,city,country,link,rating,comment,className,visible}) => {
    return (
        <div className={`grid grid-cols-4 h-full p-[60px] items-center ${className} ${!visible && 'hidden lg:grid'}`}>
            <div className="flex flex-col h-full col-span-4">
                <div className="flex items-center justify-between h-fit">
                    <div className="flex gap-x-[20px] h-fit">
                        <Image className="rounded-full w-[50px] h-[50px]" src={image} alt={name} width={50} height={50} />
                        <div>
                            <h3 className="text-white text-[20px] font-medium">{name}</h3>
                            <p className="text-grey40 text-[16px]">{city}, {country}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end h-fit">
                        <Link href={link} className="text-white text-[16px] font-medium">
                            <Image src={Twitter.src} alt="Twitter" width={28} height={28} />
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 flex gap-x-[5px] my-10">
                    {Array.from({length: rating}).map((_,index) => (
                        <Image
                            key={index}
                            src={Stars.src}
                            alt="Stars"
                            width={20}
                            height={20}
                            className="h-[20px] w-[20px] object-contain"
                        />
                    ))}
                </div>
                <p className="col-span-4 text-grey40 text-[16px] flex-1">{comment}</p>
            </div>
        </div>
    )
}

export default TestimonialsCard;
