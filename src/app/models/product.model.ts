export class Product {
    constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public description: string,
    public category: string,
    public price: number) { }
    }