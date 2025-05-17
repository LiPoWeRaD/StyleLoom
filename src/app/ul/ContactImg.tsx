import Image from "next/image";
import { FC } from "react";
import Line from "@/assets/contact/line.svg";


interface ContactImgProps {
    image: string;
    className?: string;
}

const ContactImg:FC<ContactImgProps> = ({image, className}) => {
    return (
        <div className={`relative mb-4 p-4 rounded-full bg-dark10 w-fit ${className}`}>
            <Image className="absolute top-0 right-0 scale-150" src={Line} alt="Line" width={100} height={100} />
            <Image className="z-10" src={image} alt="Contact Image" width={34} height={34} />
        </div>
    )
}

export default ContactImg;
