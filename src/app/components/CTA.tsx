import Btn from "../ul/Btn";
import CTAImage from "@/assets/Home/CTA/CTA.png";
import Image from "next/image";


const CTA = () => {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-6 gap-y-[40px] px-[20px] py-[30px] lg:p-20 bg-brown70 rounded-lg">
            <Image src={CTAImage} alt="CTA" className="absolute top-0 right-0 w-1/2 2xl:w-1/3 h-6/12 md:h-full" />
            <div className="flex flex-col gap-y-[30px] col-span-6 md:col-span-4 ">
                <h2 className="text-black text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight z-10">elevate your wardrobe</h2>
                <p className="text-grey40 text-sm md:text-lg z-10">{`Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.`}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-[30px] col-span-6 md:col-end-12 ">
                <Btn children="Shop Now" className="!bg-dark12 w-full md:w-auto z-10" />
            </div>
        </div>
    )
}

export default CTA;
