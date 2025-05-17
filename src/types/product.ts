export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
    isNew?: boolean;
    discount?: number;
    colors?: string[];
    sizes?: string[];
    material?: string;
    fit?: string;
    country?: string;
} 