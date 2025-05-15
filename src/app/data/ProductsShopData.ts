import TimelessImage from "@/assets/Home/Products/Shop/Women/Timeless.jpg";
import FloralImage from "@/assets/Home/Products/Shop/Women/Floral.jpg";
import ElegantImage from "@/assets/Home/Products/Shop/Women/Elegant.jpg";
import UrbanImage from "@/assets/Home/Products/Shop/Women/Urban.jpg";
import SophisticateImage from "@/assets/Home/Products/Shop/Women/Sophisticate.jpg";
import BohoImage from "@/assets/Home/Products/Shop/Women/Boho.jpg";
import ClassicSuit from "@/assets/Home/Products/Shop/Men/ClassicSuit.jpg";
import CasualShirt from "@/assets/Home/Products/Shop/Men/CasualShirt.jpg";
import DenimJeans from "@/assets/Home/Products/Shop/Men/DenimJeans.jpg";
import SportJacket from "@/assets/Home/Products/Shop/Men/SportJacket.jpg";
import SummerShorts from "@/assets/Home/Products/Shop/Men/SummerShorts.jpg";
import UrbanSneakers from "@/assets/Home/Products/Shop/Men/UrbanSneakers.jpg";
import RainbowDress from "@/assets/Home/Products/Shop/Kids/RainbowDress.jpg";
import DinoTShirt from "@/assets/Home/Products/Shop/Kids/DinoTShirt.jpg";
import StarJeans from "@/assets/Home/Products/Shop/Kids/StarJeans.jpg";
import SummerHat from "@/assets/Home/Products/Shop/Kids/SummerHat.jpg";
import SportSneakers from "@/assets/Home/Products/Shop/Kids/SportSneakers.jpg";
import CozyJacket from "@/assets/Home/Products/Shop/Kids/CozyJacket.jpg";

export const WomensProducts = [
    {
        image: TimelessImage.src,
        title: "Timeless A-line Evening Dress",
        tag: "Womenswear",
        fit: "Ankle-length",
        price: "$109.99",
        link: "/products/timeless-a-line-evening-dress",
        description: "An elegant A-line evening dress, perfect for special occasions.",
        material: "100% polyester",
        colors: ["Red", "Blue", "Black"],
        sizes: ["XS", "S", "M", "L", "XL"],
        isNew: true,
        discount: 10,
        country: "Italy"
    },
    {
        image: FloralImage.src,
        title: "Floral Bloom Maxi Dress",
        tag: "Womenswear",
        fit: "Slim Fit",
        price: "$54.99",
        link: "/products/floral-bloom-maxi-dress",
        description: "A lightweight maxi dress with a floral print for summer walks.",
        material: "Viscose",
        colors: ["White", "Pink"],
        sizes: ["S", "M", "L"],
        isNew: false,
        discount: 0,
        country: "France"
    },
    {
        image: ElegantImage.src,
        title: "Elegant Evening Gown",
        tag: "Womenswear",
        fit: "Flowing skirt",
        price: "$89.99",
        link: "/products/elegant-evening-gown",
        description: "An evening gown with a flowing skirt and open back.",
        material: "Satin",
        colors: ["Blue", "Emerald"],
        sizes: ["M", "L", "XL"],
        isNew: false,
        discount: 15,
        country: "Spain"
    },
    {
        image: UrbanImage.src,
        title: "Urban Chic Handbag",
        tag: "Accessories",
        fit: "Spacious",
        price: "$49.99",
        link: "/products/urban-chic-handbag",
        description: "A stylish urban handbag for everyday use.",
        material: "Eco-leather",
        colors: ["Black", "Beige"],
        sizes: ["One size"],
        isNew: true,
        discount: 5,
        country: "Poland"
    },
    {
        image: SophisticateImage.src,
        title: "Sophisticate Sun Hat",
        tag: "Womenswear",
        fit: "One size fits all",
        price: "$24.99",
        link: "/products/sophisticated-sun-hat",
        description: "A wide-brimmed hat for sun protection and a stylish look.",
        material: "Straw",
        colors: ["Beige"],
        sizes: ["One size"],
        isNew: false,
        discount: 0,
        country: "Vietnam"
    },
    {
        image: BohoImage.src,
        title: "Boho Chic Printed Scarf",
        tag: "Womenswear",
        fit: "Lightweight",
        price: "$19.99",
        link: "/products/boho-chic-printed-scarf",
        description: "A lightweight scarf with a boho print to complete your look.",
        material: "Silk",
        colors: ["Multicolor"],
        sizes: ["One size"],
        isNew: true,
        discount: 0,
        country: "India"
    }
]

export const MensProducts = [
    {
        image: ClassicSuit.src,
        title: "Classic Business Suit",
        tag: "Menswear",
        fit: "Slim Fit",
        price: "$199.99",
        link: "/products/classic-business-suit",
        description: "A classic business suit for stylish men.",
        material: "Wool, viscose",
        colors: ["Gray", "Black"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        isNew: false,
        discount: 0,
        country: "Turkey"
    },
    {
        image: CasualShirt.src,
        title: "Casual Linen Shirt",
        tag: "Menswear",
        fit: "Regular Fit",
        price: "$49.99",
        link: "/products/casual-linen-shirt",
        description: "A lightweight linen shirt for a casual style.",
        material: "Linen",
        colors: ["White", "Light Blue"],
        sizes: ["M", "L", "XL"],
        isNew: true,
        discount: 10,
        country: "Portugal"
    },
    {
        image: DenimJeans.src,
        title: "Denim Jeans",
        tag: "Menswear",
        fit: "Straight Fit",
        price: "$59.99",
        link: "/products/denim-jeans",
        description: "Classic straight-cut jeans.",
        material: "Denim (cotton)",
        colors: ["Blue", "Dark Blue"],
        sizes: ["S", "M", "L", "XL"],
        isNew: false,
        discount: 0,
        country: "Bangladesh"
    },
    {
        image: SportJacket.src,
        title: "Sport Jacket",
        tag: "Menswear",
        fit: "Athletic Fit",
        price: "$89.99",
        link: "/products/sport-jacket",
        description: "A lightweight sports jacket for active recreation.",
        material: "Polyester",
        colors: ["Black", "Gray"],
        sizes: ["M", "L", "XL"],
        isNew: true,
        discount: 5,
        country: "China"
    },
    {
        image: SummerShorts.src,
        title: "Summer Shorts",
        tag: "Menswear",
        fit: "Relaxed Fit",
        price: "$34.99",
        link: "/products/summer-shorts",
        description: "Comfortable summer shorts for walks and leisure.",
        material: "Cotton",
        colors: ["Beige", "Blue"],
        sizes: ["M", "L", "XL"],
        isNew: false,
        discount: 0,
        country: "Vietnam"
    },
    {
        image: UrbanSneakers.src,
        title: "Urban Sneakers",
        tag: "Menswear",
        fit: "Universal",
        price: "$79.99",
        link: "/products/urban-sneakers",
        description: "Modern sneakers for city and sports.",
        material: "Textile, rubber",
        colors: ["White", "Black"],
        sizes: ["40", "41", "42", "43", "44"],
        isNew: true,
        discount: 15,
        country: "China"
    }
]

export const KidsProducts = [
    {
        image: RainbowDress.src,
        title: "Rainbow Summer Dress",
        tag: "Kidswear",
        fit: "Loose Fit",
        price: "$29.99",
        link: "/products/rainbow-summer-dress",
        description: "A bright summer dress for girls with a rainbow print.",
        material: "Cotton",
        colors: ["Rainbow"],
        sizes: ["98", "104", "110", "116"],
        isNew: true,
        discount: 5,
        country: "China"
    },
    {
        image: DinoTShirt.src,
        title: "Dino Print T-Shirt",
        tag: "Kidswear",
        fit: "Regular Fit",
        price: "$14.99",
        link: "/products/dino-print-tshirt",
        description: "A t-shirt with a dinosaur for little explorers.",
        material: "Cotton",
        colors: ["White", "Green"],
        sizes: ["98", "104", "110", "116"],
        isNew: false,
        discount: 0,
        country: "Bangladesh"
    },
    {
        image: StarJeans.src,
        title: "Star Pattern Jeans",
        tag: "Kidswear",
        fit: "Slim Fit",
        price: "$24.99",
        link: "/products/star-pattern-jeans",
        description: "Jeans with a star print for stylish kids.",
        material: "Denim (cotton)",
        colors: ["Blue"],
        sizes: ["98", "104", "110", "116"],
        isNew: false,
        discount: 0,
        country: "Turkey"
    },
    {
        image: SummerHat.src,
        title: "Summer Sun Hat",
        tag: "Accessories",
        fit: "One size",
        price: "$9.99",
        link: "/products/summer-sun-hat",
        description: "A summer panama hat for sun protection.",
        material: "Cotton",
        colors: ["Yellow", "Light Blue"],
        sizes: ["One size"],
        isNew: true,
        discount: 0,
        country: "China"
    },
    {
        image: SportSneakers.src,
        title: "Sporty Sneakers",
        tag: "Kidswear",
        fit: "Universal",
        price: "$34.99",
        link: "/products/sporty-sneakers",
        description: "Comfortable sneakers for active kids.",
        material: "Textile, rubber",
        colors: ["Blue", "Red"],
        sizes: ["27", "28", "29", "30", "31"],
        isNew: false,
        discount: 10,
        country: "Vietnam"
    },
    {
        image: CozyJacket.src,
        title: "Cozy Winter Jacket",
        tag: "Kidswear",
        fit: "Warm Fit",
        price: "$49.99",
        link: "/products/cozy-winter-jacket",
        description: "A warm winter jacket for kids.",
        material: "Polyester, fleece",
        colors: ["Blue", "Pink"],
        sizes: ["98", "104", "110", "116"],
        isNew: true,
        discount: 20,
        country: "China"
    }
]
