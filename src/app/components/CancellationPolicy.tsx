import CancellationIcon from "@/assets/contact/Cancellation.svg";
import CancellationProcessIcon from "@/assets/contact/CancellationProcess.svg";
import RefundTimelineIcon from "@/assets/contact/RefundTimeline.svg";
import ContactImg from "../ul/ContactImg";
import Btn from "../ul/Btn";

const CancellationPolicy = () => {
    return (
        <div className="flex flex-col border-dashed border-2 border-dark15">
            <div className="relative flex flex-col lg:flex-row justify-between lg:items-center gap-y-[30px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
                <h2 className="text-white text-[24px] sm:text-[26px] 2xl:text-3xl font-medium uppercase tracking-tight">Cancellation Policy</h2>
                <Btn
                    className="relative w-full lg:w-fit"
                    hrefLink="#"
                >
                    Read Cancellation Policy
                </Btn>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex items-center px-10 py-[60px] gap-x-[30px] border-dashed border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-dark15">
                    <ContactImg 
                        image={CancellationIcon.src}
                        className="h-fit"
                    />
                    <div className="flex flex-col gap-y-[16px]">
                        <h3 className="text-white text-[18px] xl:text-[20px] 2xl:text-2xl font-medium tracking-tight">Cancellation Window</h3>
                        <p className="text-grey40 text-[14px] xl:text-[16px] 2xl:text-lg">{`Orders can be canceled within 24 hours of placement for a full refund.`}</p>
                    </div>
                </div>
                <div className="flex items-center px-10 py-[60px] gap-x-[30px] border-dashed border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-dark15">
                    <ContactImg 
                        image={CancellationProcessIcon.src}
                        className="h-fit"
                    />
                    <div className="flex flex-col gap-y-[16px]">
                        <h3 className="text-white text-[18px] xl:text-[20px] 2xl:text-2xl font-medium tracking-tight">Cancellation Process</h3>
                        <p className="text-grey40 text-[14px] xl:text-[16px] 2xl:text-lg">{`Visit our Order Management section to cancel your order effortlessly.`}</p>
                    </div>
                </div>
                <div className="flex items-center px-10 py-[60px] gap-x-[30px] ">
                    <ContactImg 
                        image={RefundTimelineIcon.src}
                        className="h-fit"
                    />
                    <div className="flex flex-col gap-y-[16px]">
                        <h3 className="text-white text-[18px] xl:text-[20px] 2xl:text-2xl font-medium tracking-tight">Refund Timeline</h3>
                        <p className="text-grey40 text-[14px] xl:text-[16px] 2xl:text-lg">{`Refunds for canceled orders are processed within 5-7 business days.`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancellationPolicy;