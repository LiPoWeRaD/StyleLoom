import { WomensProducts, MensProducts, KidsProducts } from "@/app/data/ProductsShopData";
import Btn from "@/app/ul/Btn";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    return {
        title: `StyleLoom - ${resolvedParams.slug}`,
    };
}

export default async function ProductPage({ params }: PageProps) {
    const resolvedParams = await params;
    const allProducts = [...WomensProducts, ...MensProducts, ...KidsProducts];

    // Ищем товар по slug
    const product = allProducts.find(
        (item) => item.link.split("/products/")[1] === resolvedParams.slug
    );

    if (!product) return notFound();

    return (
        <section className="container mx-auto py-10 px-4 bg-dark06">
            <div className="flex flex-col lg:flex-row gap-10 bg-dark12 rounded-3xl shadow-lg p-6 md:p-12">
                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="rounded-t-[60px] object-cover shadow-md"
                    />
                    {product.isNew && (
                        <span className="w-full flex items-center justify-center text-black bg-green-500 text-2xl font-semibold px-3 py-1 rounded-full uppercase tracking-wider mt-2">New</span>
                    )}
                    {product.discount > 0 && (
                        <span className="w-full flex items-center justify-center text-black bg-red-500 text-2xl font-semibold px-3 py-1 rounded-full uppercase tracking-wider mt-2">-{product.discount}%</span>
                    )}
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold mb-2 text-white flex items-center gap-3">{product.title}</h1>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-grey40 text-base bg-dark15 px-3 py-1 rounded-full border border-dark10">{product.tag}</span>
                        <span className="text-grey40 text-base">Country: <span className="text-white font-medium">{product.country}</span></span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 mb-2">
                        <span className="text-grey40">Fit <span className="mx-2 text-grey40 align-middle">•</span> <span className="text-white font-medium">{product.fit}</span></span>
                        <span className="text-grey40">Material <span className="mx-2 text-grey40 align-middle">•</span> <span className="text-white font-medium">{product.material}</span></span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 mb-2">
                        <span className="text-grey40">Price <span className="mx-2 text-grey40 align-middle">•</span> <span className="text-2xl text-primary font-bold">{product.price}</span></span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mb-2">
                        <div>
                            <span className="text-grey40">Colors:</span>
                            <div className="flex gap-2 mt-1">
                                {product.colors.map((color, idx) => (
                                    <span key={idx} className="inline-block px-3 py-1 rounded-full border border-dark10 bg-dark15 text-white text-sm">{color}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="text-grey40">Sizes:</span>
                            <div className="flex gap-2 mt-1">
                                {product.sizes.map((size, idx) => (
                                    <span key={idx} className="inline-block px-3 py-1 rounded-full border border-dark10 bg-dark15 text-white text-sm">{size}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="text-grey40 block mb-1">Description:</span>
                        <p className="text-white text-lg leading-relaxed bg-dark15 rounded-xl p-4 border border-dark10 shadow-sm">{product.description}</p>
                    </div>
                    <Btn className="relative w-full sm:w-fit bg-yellow-800 hover:bg-yellow-900 duration-300 ease-in-out" hrefLink={product.link}>Shop Now</Btn>
                </div>
            </div>
        </section>
    );
}