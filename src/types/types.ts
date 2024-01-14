export type Product = {
    //   id: string;
    name: string;
    price:number
    
}

export type Order={
    product: Product | null;
    observation?: string;
    quantity: number;
    drinks ?: string[]
}