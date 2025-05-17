"use client"

import Image from "next/image";
import ElevateImage from "@/assets/Home/Products/Elevate.png";

const TermsPage = () => {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center bg-dark06 py-10">
            <section className="container border-dashed border-2 border-dark15 rounded-lg">
                <div className="relative flex flex-col gap-y-[40px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
                    <div className="flex flex-col gap-y-[30px]">
                        <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">Terms of Service</h2>
                        <p className="text-grey40 text-[16px] 2xl:text-lg">Last updated: {new Date().toLocaleDateString()}</p>
                        <Image width={170} height={100} src={ElevateImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
                    </div>
                </div>
                <div className="p-[20px] lg:p-20">
                    <div className="flex flex-col gap-y-8 text-grey40">
                        <div>
                            <h3 className="text-white text-2xl mb-4">1. Acceptance of Terms</h3>
                            <p className="text-lg">By accessing and using StyleLoom, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">2. Use License</h3>
                            <p className="text-lg">{`Permission is granted to temporarily download one copy of the materials (information or software) on StyleLoom's website for personal, non-commercial transitory viewing only.`}</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">3. User Account</h3>
                            <p className="text-lg">{`To access certain features of the website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information.`}</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">4. Product Information</h3>
                            <p className="text-lg">{`We strive to display our products as accurately as possible. However, we cannot guarantee that your screen's display of any color will be accurate.`}</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">5. Pricing and Payment</h3>
                            <p className="text-lg">{`All prices are subject to change without notice. We reserve the right to modify or discontinue any product without notice at any time.`}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TermsPage; 