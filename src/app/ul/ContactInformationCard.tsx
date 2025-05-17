import Image from "next/image";
import { FC } from "react";
import ContactImg from "./ContactImg";
import Btn from "./Btn";


interface ContactInformationCardProps {
    image: string;
    title: string;
    link: string;
    linkTitle: string;
    icon: string;
    className?: string;
    visible?: boolean;
}

const ContactInformationCard:FC<ContactInformationCardProps> = ({image, title, link, linkTitle, icon, className }) => {
    return (
        <div className={`relative flex flex-col gap-y-[50px] justify-center items-center p-[60px] border-dashed border-dark15 overflow-hidden ${className}`}>
            <ContactImg image={image} />
            <div className="flex flex-col justify-end items-center gap-y-[16px] w-full">
                <h3 className="text-white text-2xl font-medium">{title}</h3>
                <Btn className="relative w-full" hrefLink={link} arrow={false} >
                    {linkTitle}
                </Btn> 
                <Image className="absolute -top-1 -right-1" width={170} height={170} src={icon} alt={title} />
            </div>
        </div>
    )
}

export default ContactInformationCard;