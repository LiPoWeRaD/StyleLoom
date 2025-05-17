"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.id}`} className="group">
            <div className="bg-dark15 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div className="relative">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-full h-[300px] object-cover"
                    />
                    {product.isNew && (
                        <span className="absolute top-2 left-2 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            New
                        </span>
                    )}
                    {product.discount && (
                        <span className="absolute top-2 right-2 bg-red-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            -{product.discount}%
                        </span>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-white text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-grey40 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-primary text-xl font-bold">${product.price}</span>
                        <div className="flex gap-2">
                            {product.tags.slice(0, 2).map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-grey40 text-xs bg-dark10 px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
} 