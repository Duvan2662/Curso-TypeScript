import { Product, taxCalculation2 } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description:'Nokia',
        price:100
    },
    {
        description:'iPad',
        price:500
    }
];


const [total,tax] = taxCalculation2({
    tax: 0.15,
    products: shoppingCart
});

console.log(`Total: ${total}`);
console.log(`Tax: ${tax}`);




export{}