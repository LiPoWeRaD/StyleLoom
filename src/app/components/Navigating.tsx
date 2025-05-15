import Image from "next/image";
import NavigatingImage from "@/assets/Home/Navigating/Navigating.png";
import NavigatingCard from "../ul/NavigatingCard";

const Navigating = () => {
    return (
        <div className="flex flex-col ">
            <div className="relative flex flex-col gap-y-[30px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
                <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">Navigating the StyleLoom Fashion Journey.</h2>
                <p className="text-grey40 text-[16px] 2xl:text-lg">At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</p>
                <Image width={170} height={100} src={NavigatingImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <NavigatingCard className="border-dashed border-b-2 lg:border-b-0 lg:border-r-2 border-dark15" step="01" title="Discover Trends" description="Explore our curated collection of over 1000 styles, spanning global fashion trends." />
                <NavigatingCard className="border-dashed border-b-2 lg:border-b-0 lg:border-r-2 border-dark15" step="02" title="Effortless Navigation" description="Intuitive filters and categories help you find the perfect pieces tailored to your style." />
                <NavigatingCard className="border-dashed border-b-2 lg:border-b-0 lg:border-r-2 border-dark15" step="03" title="Secure Checkout" description="Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase." />
                <NavigatingCard step="04" title="Unbox Happiness" description="Unbox a fashion-forward experience delivered right to your door, ready to elevate your style." />
            </div>
        </div>
    )
}

export default Navigating;