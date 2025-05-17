import CancellationPolicy from "../components/CancellationPolicy";
import ContactInformation from "../components/ContactInformation";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import ReturnPolicy from "../components/ReturnPolicy";
import Testimonials from "../components/Testimonials";



const Contact = () => {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center bg-dark06 gap-y-[50px] md:gap-y-[80px] lg:gap-y-[100px] py-10">
            <section className="container border-dashed border-2 border-dark15 rounded-lg">
                <ContactInformation />
            </section>
            <section className="container border-dashed  border-dark15 rounded-lg">
                <ReturnPolicy />
            </section>
            <section className="container border-dashed  border-dark15 rounded-lg]">
                <CancellationPolicy />
            </section>
            <section id="Testimonials" className="container border-dashed border-2 border-dark15 rounded-lg border-r-0">
                <Testimonials />
            </section>
            <section id="FAQ" className="container border-dashed border-2 border-r-0 border-dark15 rounded-lg ">
                <FAQ />
            </section>
            <section id="CTA" className="container mb-[100px]">
                <CTA />
            </section>
        </main>
    )
}

export default Contact;