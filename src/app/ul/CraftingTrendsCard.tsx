import Image from "next/image";
import { FC } from "react";

interface CraftingTrendsCardProps {
    image: string;
    title: string;
    description: string;
    icon: string;
    className?: string;
    visible?: boolean;
}

const CraftingTrendsCard:FC<CraftingTrendsCardProps> = ({image, title, description, icon, className, visible = true }) => {
    return (
        <div className={`relative flex flex-col p-[60px] border-dashed border-dark15 overflow-hidden ${className} ${!visible && 'hidden lg:flex'}`}>
            <Image className="mb-[50px]" width={94} height={94} src={image} alt={title} />
            <div className="flex flex-col gap-y-[16px]">
                <h3 className="text-white text-2xl font-medium">{title}</h3>
                <p className="text-grey40 text-lg">{description}</p>
                <Image className="absolute -top-1 -right-1" width={170} height={170} src={icon} alt={title} />
            </div>
        </div>
    )
}

export default CraftingTrendsCard;






