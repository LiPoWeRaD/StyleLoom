"use client"

import Image from "next/image";
import ElevateImage from "@/assets/Home/Products/Elevate.png";

const PrivacyPage = () => {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center bg-dark06 py-10">
            <section className="container border-dashed border-2 border-dark15 rounded-lg">
                <div className="relative flex flex-col gap-y-[40px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
                    <div className="flex flex-col gap-y-[30px]">
                        <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">Privacy Policy</h2>
                        <p className="text-grey40 text-[16px] 2xl:text-lg">Last updated: {new Date().toLocaleDateString()}</p>
                        <Image width={170} height={100} src={ElevateImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
                    </div>
                </div>
                <div className="p-[20px] lg:p-20">
                    <div className="flex flex-col gap-y-8 text-grey40">
                        <div>
                            <h3 className="text-white text-2xl mb-4">1. Information We Collect</h3>
                            <p className="text-lg">We collect information that you provide directly to us, including your name, email address, postal address, phone number, and payment information when you make a purchase.</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">2. How We Use Your Information</h3>
                            <p className="text-lg">We use the information we collect to process your orders, communicate with you about your orders, and provide customer support.</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">3. Information Sharing</h3>
                            <p className="text-lg">We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business.</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">4. Cookies and Tracking</h3>
                            <p className="text-lg">We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your browsing experience.</p>
                        </div>
                        <div>
                            <h3 className="text-white text-2xl mb-4">5. Your Rights</h3>
                            <p className="text-lg">You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PrivacyPage; 