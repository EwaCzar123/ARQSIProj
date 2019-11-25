import { Operation } from './operation';

export class Product {
    private _id: number;
    
    constructor
    (
        private _description: string
    ) {}

    get id(): number {
        return this._id;
    }
    get description(): string {
        return this._description;
    }

    static fromJSON(json: any): Product {
        const product = new Product(json.description);
        product._id = json.id;
        return product;
    }

    toJSON(json: any) {
        return {
            id: this._id,
            description: this.description
        }
    }
}
