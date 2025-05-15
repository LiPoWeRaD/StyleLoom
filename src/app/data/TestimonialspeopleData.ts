import SarahThompson from "@/assets/Home/Testimonials/People/Sarah-Thompson.jpg";
import RajeshPatel from "@/assets/Home/Testimonials/People/Rajesh-Patel.jpg";
import EmilyWalker from "@/assets/Home/Testimonials/People/Emily-Walker.jpg";
import AlejandroMartinez from "@/assets/Home/Testimonials/People/Alejandro-Martinez.jpg";
import PriyaSharma from "@/assets/Home/Testimonials/People/Priya-Sharma.jpg";
import MariaRodriguez from "@/assets/Home/Testimonials/People/Maria-Rodriguez.jpg";

export interface TestimonialspeopleData {
    image: string;
    name: string;
    city: string;
    country: string;
    link: string;
    rating: number;
    comment: string;
    className?: string;
    visible?: boolean;
}

export const TestimonialspeopleData: TestimonialspeopleData[] = [
    {
        image: SarahThompson.src,
        name: "Sarah Thompson",
        city: "New York",
        country: "USA",
        link: "#",
        rating: 5,
        comment: "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    },
    {
        image: RajeshPatel.src,
        name: "Rajesh Patel",
        city: "Mumbai",
        country: "India",
        link: "#",
        rating: 4,
        comment: "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
        image: EmilyWalker.src,
        name: "Emily Walker",
        city: "London",
        country: "UK",
        link: "#",
        rating: 5,
        comment: "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.",
    },
    {
        image: AlejandroMartinez.src,
        name: "Alejandro Martinez",
        city: "Barcelona",
        country: "Spain",
        link: "#",
        rating: 4,
        comment: "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!",
    },
    {
        image: PriyaSharma.src,
        name: "Priya Sharma",
        city: "Delhi",
        country: "India",
        link: "#",
        rating: 5,
        comment: "Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings.",
    },
    {
        image: MariaRodriguez.src,
        name: "Maria Rodriguez",
        city: "Mexico City",
        country: "Mexico",
        link: "#",
        rating: 4,
        comment: "Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality.",
    },
];

    
