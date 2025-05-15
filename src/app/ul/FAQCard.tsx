import { FC } from "react";


interface FAQCardProps {
    title: string;
    content: string;
    className?: string;
    visible?: boolean;
}

const FAQCard:FC<FAQCardProps> = ({ title, content, className, visible }) => {
    return <div className={`flex flex-col gap-y-[10px] border-dashed border-2 border-l-0 lg:border-l-0 border-dark15 p-[60px] ${className} ${!visible && 'hidden lg:grid'}`}>
        <h3 className="text-white text-[24px] font-medium">{title}</h3>
        <p className="text-grey40 text-[16px]">{content}</p>
    </div>
}

export default FAQCard;

