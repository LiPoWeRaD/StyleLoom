import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id: "1",
        title: "Classic White T-Shirt",
        description: "A comfortable and versatile white t-shirt made from 100% cotton.",
        price: 29.99,
        image: "/images/products/white-tshirt.jpg",
        tags: ["Clothing", "T-Shirts", "Men"],
        isNew: true,
        colors: ["White", "Black", "Gray"],
        sizes: ["S", "M", "L", "XL"],
        material: "Cotton",
        fit: "Regular",
        country: "USA"
    },
    {
        id: "2",
        title: "Leather Wallet",
        description: "Genuine leather wallet with multiple card slots and coin pocket.",
        price: 49.99,
        image: "/images/products/leather-wallet.jpg",
        tags: ["Accessories", "Wallets", "Men"],
        colors: ["Brown", "Black"],
        material: "Leather",
        country: "Italy"
    },
    {
        id: "3",
        title: "Summer Dress",
        description: "Light and flowy summer dress perfect for warm days.",
        price: 59.99,
        image: "/images/products/summer-dress.jpg",
        tags: ["Clothing", "Dresses", "Women"],
        isNew: true,
        discount: 15,
        colors: ["Blue", "Pink", "White"],
        sizes: ["XS", "S", "M", "L"],
        material: "Cotton Blend",
        fit: "Loose",
        country: "France"
    }
]; 