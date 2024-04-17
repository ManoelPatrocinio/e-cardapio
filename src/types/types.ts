export type Product = {
    id: string;
    name: string;
    price:number;
    ingredients: string; 
    category: "hamburguer" |"bebidas";
    imgsUrl: string[];
    
}

export type Order={
    product: Product | null;
    observation?: string;
    quantity: number;
    total:number;
    drinks ?: string[]
}