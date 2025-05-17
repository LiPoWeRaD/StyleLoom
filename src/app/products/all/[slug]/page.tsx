import { WomensProducts, MensProducts, KidsProducts } from "@/app/data/ProductsShopData";
import ProductsShop from "@/app/ul/ProductsShop";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    return [
        { slug: 'allwear' },
        { slug: 'mens' },
        { slug: 'womens' },
        { slug: 'kids' },
        { slug: 'accessories' },
        { slug: 'bagsandhandbags' }
    ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    return {
        title: `StyleLoom - ${resolvedParams.slug}`,
    };
}

export default async function Page({ params, searchParams }: PageProps) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const active = resolvedSearchParams.active as string;
    
    // Формируем список продуктов в зависимости от активной категории
    let allProducts = [];
    switch(active?.toLowerCase()) {
        case 'womens':
            allProducts = [...WomensProducts];
            break;
        case 'mens':
            allProducts = [...MensProducts];
            break;
        case 'kids':
            allProducts = [...KidsProducts];
            break;
        default:
            allProducts = [...WomensProducts, ...MensProducts, ...KidsProducts];
    }
  
    // Ищем товары по тегу
    const products = allProducts.filter(item => {
        const tag = item.tag.toLowerCase();
        const slug = resolvedParams.slug.toLowerCase();
        
        // Маппинг тегов к URL-слагам
        const tagMapping: { [key: string]: string[] } = {
            'menswear': ['mens', 'menswear'],
            'womenswear': ['womens', 'womenswear'],
            'kidswear': ['kids', 'kidswear'],
            'accessories': ['accessories', 'accessories'],
            'bags and hand bags': ['bagsandhandbags', 'bags and hand bags']
        };

        // Если это allwear, показываем все товары из основных категорий
        if (slug === 'allwear') {
            return ['menswear', 'womenswear', 'kidswear'].includes(tag);
        }

        // Проверяем все возможные варианты тега
        return Object.entries(tagMapping).some(([key, values]) => 
            tag === key && values.includes(slug)
        );
    });

    if (!products.length) return notFound();

    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center bg-dark06 py-10">
            <section id="Products" className="container border-dashed border-2 border-dark15 rounded-lg">
                <h2 className="px-[20px] py-[30px] lg:p-5 text-white text-[32px] 2xl:text-5xl font-medium uppercase tracking-tight ml-5">
                    {resolvedParams.slug === 'allwear' ? 'All Collections' : resolvedParams.slug ? resolvedParams.slug === 'BagsandHandBags' ? 'Bags and Hand Bags' : resolvedParams.slug + ' Collection' : 'All Collections'}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {products.map((item) => (
                        <ProductsShop
                            key={crypto.randomUUID()}
                            {...item}
                            visible={true}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}



    