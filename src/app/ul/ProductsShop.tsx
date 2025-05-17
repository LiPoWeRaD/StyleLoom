import Image from "next/image";
import { FC } from "react";
import Btn from "./Btn";


interface ProductsShopProps {
    image: string;
    title: string;
    tag: string;
    fit: string;
    price: string;
    className?: string;
    link: string;
    visible?: boolean;
}

const ProductsShop:FC<ProductsShopProps> = ({image, title, tag, fit, price, className, link, visible = true}) => {
    return (
        <div className={`relative grid grid-cols-2 gap-y-[16px] p-[20px] border-dashed border-2 border-dark15 ${className} ${!visible && 'hidden lg:grid'}`}>
            <Image  className="col-span-2 w-full h-[291px] object-cover rounded-t-[60px]" src={image} alt={title} width={291} height={291} />
            <span className="col-span-1 w-fit h-fit self-center text-white text-sm px-3 py-2 rounded-full bg-dark10 border-dashed border-2 border-dark15">{tag}</span>
            <Btn className="col-span-1 w-fit h-fit self-center ml-auto relative bg-primary sm:w-fit " hrefLink={link}>Shop Now</Btn>
            <h3 className="col-span-2 text-white text-lg 2xl:text-2xl font-medium">{title}</h3>
            <div className="col-span-2 flex gap-x-4 items-center">
                <p className="text-white text-[16px] font-medium">
                    <span className="text-grey40 text-sm">Fit</span>
                    <span className="mx-2 text-grey40 align-middle">•</span>
                    {fit}
                </p>
                <p className="text-white text-[16px] font-medium">
                    <span className="text-grey40 text-sm">Price</span>
                    <span className="mx-2 text-grey40 align-middle">•</span>
                    {price}
                </p>
            </div>
        </div>
    )
}

export default ProductsShop;
