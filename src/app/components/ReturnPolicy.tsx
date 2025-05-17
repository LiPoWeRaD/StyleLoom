import EligibilityIcon from "@/assets/contact/Eligibility.svg";
import ProcessIcon from "@/assets/contact/Process.svg";
import RefundIcon from "@/assets/contact/Refund.svg";
import ContactImg from "../ul/ContactImg";
import Btn from "../ul/Btn";

const ReturnPolicy = () => {
    return (
        <div className="flex flex-col border-dashed border-2 border-dark15">
            <div className="relative flex flex-col lg:flex-row justify-between lg:items-center gap-y-[30px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
                <h2 className="text-white text-[24px] sm:text-[26px] 2xl:text-3xl font-medium uppercase tracking-tight">Return Policy</h2>
                <Btn
                    className="relative w-full lg:w-fit"
                    hrefLink="#"
                >
                    Read Return Policy
                </Btn>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex items-center px-10 py-[60px] gap-x-[30px] border-dashed border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-dark15">
                    <ContactImg 
                        image={EligibilityIcon.src}
                        className="h-fit"
                    />
                    <div className="flex flex-col gap-y-[16px]">
                        <h3 className="text-white text-[18px] xl:text-[20px] 2xl:text-2xl font-medium tracking-tight">Eligibility</h3>
                        <p className="text-grey40 text-[14px] xl:text-[16px] 2xl:text-lg">{`Items must be unused, with tags attached, and returned within 30 days of delivery.`}</p>
                    </div>
                </div>
                <div className="flex items-center px-10 py-[60px] gap-x-[30px] border-dashed border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-dark15">
                    <ContactImg 
                        image={ProcessIcon.src}
                        className="h-fit"
                    />
                    <div className="flex flex-col gap-y-[16px]">
                        <h3 className="text-white text-[18px] xl:text-[20px] 2xl:text-2xl font-medium tracking-tight">Process</h3>
                        <p className="text-grey40 text-[14px] xl:text-[16px] 2xl:text-lg">{`Initiate returns through our Return Center for a smooth and efficient process.`}</p>
                    </div>
                </div>
                <div className="flex items-center px-10 py-[60px] gap-x-[30px] ">
                    <ContactImg 
                        image={RefundIcon.src}
                        className="h-fit"
                    />
                    <div className="flex flex-col gap-y-[16px]">
                        <h3 className="text-white text-[18px] xl:text-[20px] 2xl:text-2xl font-medium tracking-tight">Refund</h3>
                        <p className="text-grey40 text-[14px] xl:text-[16px] 2xl:text-lg">{`Expect a refund to your original payment method within 7-10 business days.`}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReturnPolicy;