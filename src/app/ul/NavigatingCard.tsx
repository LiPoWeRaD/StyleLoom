import { FC } from "react";


interface NavigatingCardProps {
    step: string;
    title: string;
    description: string;
    className?: string;
}

const NavigatingCard:FC<NavigatingCardProps> = ({ step, title, description, className }) => {
    return (
        <div className={`flex flex-col gap-y-[16px] p-5 xl:p-[40px] 2xl:p-[50px] ${className}`}>
            <span className="text-[18px] 2xl:text-[20px] font-medium tracking-tight text-grey40">Step {step}</span>
            <h3 className="text-white text-[22px] 2xl:text-[32px] font-medium tracking-tight">{title}</h3>
            <p className="text-grey40 text-[16px] 2xl:text-lg">{description}</p>
        </div>
    )
}

export default NavigatingCard;