import Image from "next/image";
import NavigatingImage from "@/assets/contact/Navigating.png";
import ContactInformationCard from "../ul/ContactInformationCard";
import EmailImage from "@/assets/email.svg";
import EmailIcon from "@/assets/contact/email.svg";
import PhoneImage from "@/assets/phone.svg";
import PhoneIcon from "@/assets/contact/phone.svg";
import LocationImage from "@/assets/location.svg";
import LocationIcon from "@/assets/contact/location.svg";


const ContactInformation = () => {

    return (
        <div className="flex flex-col ">
            <div className="relative flex flex-col gap-y-[30px] px-[20px] py-[30px] lg:p-20 border-dashed border-b-2 border-dark15">
                <h2 className="text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight">Your Partner in Every Step of Your Fashion Journey.</h2>
                <p className="text-grey40 text-[16px] 2xl:text-lg">{`24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.`}</p>
                <Image width={170} height={100} src={NavigatingImage} alt="Navigating" className="absolute top-0 right-0 h-full hidden xl:block" />
            </div>
            <div className="flex flex-col gap-y-[30px] px-[20px] py-[30px] border-dashed border-b-2 border-dark15">
                <h3 className="text-white text-[24px] sm:text-[26px] 2xl:text-3xl font-medium uppercase tracking-tight">Contact Information</h3>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 ">
                <ContactInformationCard 
                    image={EmailImage.src} 
                    title="Email" 
                    linkTitle="support@StyleLoom.com"
                    link="mailto:support@StyleLoom.com"
                    icon={EmailIcon.src} 
                    className="border-b-2 xl:border-r-2 border-dark15"
                />
                <ContactInformationCard 
                    image={PhoneImage.src} 
                    title="Phone" 
                    linkTitle="+1 (555) 123-4567"
                    link="tel:+15551234567"
                    icon={PhoneIcon.src} 
                    className="border-b-2 xl:border-r-2 border-dark15"
                />
                <ContactInformationCard 
                    image={LocationImage.src} 
                    title="Location" 
                    linkTitle="Get Direction"
                    link="123 Main St, Anytown, USA"
                    icon={LocationIcon.src} 
                    className=" border-dark15"
                />
            </div>
        </div>
    )
}

export default ContactInformation;