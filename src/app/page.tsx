import First from "@/assets/Home/One.png";
import FirstLaptop from "@/assets/Home/OneLaptop.png";
import FirstMobile from "@/assets/Home/OneMobile.png";
import Image from "next/image";
import Btn from "./ul/Btn";
import Link from "next/link";
import CraftingTrends from "./components/CraftingTrends";
import Navigating from "./components/Navigating";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center bg-dark06">
      <section id="Hero" className="flex flex-col container">
        <div className="relative flex flex-col gap-[16px]  border-dashed border-2 border-b-0 border-dark15">
          <Image className="rounded-t-[18px] hidden lg:block" src={First} alt="First" />
          <Image className="rounded-t-[18px] hidden sm:block lg:hidden" src={FirstLaptop} alt="First" />
          <Image className="rounded-t-[18px] w-full block sm:hidden" src={FirstMobile} alt="First" />
          <Btn className="bg-primary absolute -bottom-7 2xl:-bottom-10 right-1/2 translate-x-1/2 scale-110 w-[37%] sm:w-fit sm:scale-50 md:scale-[0.65] lg:scale-75 xl:scale-100">Shop Now</Btn>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 border-dashed border-2 border-dark15 border-t-0 rounded-b-[18px]">
          <div className="flex flex-col items-center xl:items-start p-20 pt-[58px] gap-y-[30px] border-dashed border-b-2 xl:border-b-0 border-dark15"> 
            <ul className="flex gap-x-3.5">
              <li className="px-[20px] py-[12px] md:px-[30px] md:py-[18px] rounded-xl cursor-pointer border-dashed border-2 border-dark15">
                  <Link className={`text-sm md:text-base`}  href="#">All</Link>
              </li>
              <li className="px-[20px] py-[12px] md:px-[30px] md:py-[18px] rounded-xl cursor-pointer border-dashed border-2 border-dark15">
                  <Link className={`text-sm md:text-base `}  href="#">Mens</Link>
              </li>
              <li className="px-[20px] py-[12px] md:px-[30px] md:py-[18px] rounded-xl cursor-pointer border-dashed border-2 border-dark15">
                  <Link className={`text-sm md:text-base`}  href="#">Womens</Link>
              </li>
              <li className="px-[20px] py-[12px] md:px-[30px] md:py-[18px] rounded-xl cursor-pointer border-dashed border-2 border-dark15">
                <Link className={`text-sm md:text-base`}  href="#">Kids</Link>
              </li>
            </ul>
            <h1 className="text-white text-5xl font-medium uppercase">Elevate Your Style with StyleLoom</h1>
            <p className="text-grey40 text-lg ">Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>
          </div>
          <div className="grid grid-cols-2 border-dashed xl:border-l-2 border-dark15">
            <div className="flex flex-col p-[50px] pt-[58px] gap-y-[10px] border-dashed border-2 border-t-0 border-l-0 border-dark15">
              <p className="text-white text-[30px] md:text-[40px] font-medium whitespace-nowrap">1,500 +</p>
              <span className="text-grey40 text-sm md:text-lg">Fashion Products</span>
            </div>
            <div className="flex flex-col p-[50px] py-[58px] gap-y-[10px] border-dashed border-2 border-t-0 border-x-0 border-dark15">
              <p className="text-white text-[30px] md:text-[40px] font-medium whitespace-nowrap">50 +</p>
              <span className="text-grey40 text-sm md:text-lg">New arrivals every month.</span>
            </div>
            <div className="flex flex-col p-[50px] py-[58px] gap-y-[10px] border-dashed border-2 border-l-0 border-y-0 border-dark15">
              <p className="text-white text-[30px] md:text-[40px] font-medium whitespace-nowrap">30%</p>
              <span className="text-grey40 text-sm md:text-lg">OFF on select items.</span>
            </div>
            <div className="flex flex-col p-[50px] py-[58px] gap-y-[10px] border-dashed border-2 border-x-0 border-y-0 border-dark15">
              <p className="text-white text-[30px] md:text-[40px] font-medium whitespace-nowrap">95%</p>
              <span className="text-grey40 text-sm md:text-lg">Customer Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>
      <section id="Features" className="container border-dashed border-2 border-dark15 rounded-lg">
        <CraftingTrends />
      </section>
      <section id="Process" className="container border-dashed border-2 border-dark15 rounded-lg">
        <Navigating />
      </section>
      <section id="Products" className="container border-dashed border-2 border-dark15 rounded-lg">
        <Products />
      </section>
    </main>
  );
}
