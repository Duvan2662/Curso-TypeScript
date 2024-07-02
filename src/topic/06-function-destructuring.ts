

//En clase


// interface Product {
//     description: string;
//     price: number;
// }


// const phone: Product = {
//     description: "Nokia A1",
//     price: 150.0
// }

// const tablet: Product = {
//     description: "iPad Air",
//     price: 250.0
// }


// interface TaxCalculationOptions {
//     tax:number;
//     products : Product[];
// }

// const taxCalculation2 = (options:TaxCalculationOptions):number[] => {

//     let total = 0;
//     options.products.forEach(product =>{
//         total += product.price;
//     });

//     return[total, total* options.tax]
// }


// const shoppingCart: Product[] = [phone,tablet];
// const tax: number = 0.15;

// const result = taxCalculation2({
//     tax: tax,
//     products: shoppingCart
// });

// console.log(`Total: ${result[0]}`)
// console.log(`Tax: ${result[1]}`)






//TAREA


// interface Product {
//     description: string;
//     price: number;
// }


// const phone: Product = {
//     description: "Nokia A1",
//     price: 150.0
// }

// const tablet: Product = {
//     description: "iPad Air",
//     price: 250.0
// }


// interface TaxCalculationOptions {
//     tax: number;
//     products: Product[];
// }



// const taxCalculation2 = (options:TaxCalculationOptions):number[] => {
//     const {tax,products} = options;
//     let total = 0;
//     products.forEach(product =>{
//         const {price} = product
//         total += price;
//     });

//     return[total, total*tax]
// }


// const shoppingCart: Product[] = [phone,tablet];
// const tax: number = 0.15;

// const result = taxCalculation2({
//     tax: tax,
//     products: shoppingCart
// });

// const [total,valueTax] = result;


// console.log(`Total: ${total}`)
// console.log(`Tax: ${valueTax}`)


//Solucion del profesor
interface Product {
    description: string;
    price: number;
}


const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



const taxCalculation2 = (options:TaxCalculationOptions):[number,number] => {
    const {tax,products} = options;
    let total = 0;
    products.forEach(({price}) =>{
        total += price;
    });

    return[total, total*tax]
}


const shoppingCart: Product[] = [phone,tablet];
const tax: number = 0.15;

const [total,valueTax] = taxCalculation2({
    tax: tax,
    products: shoppingCart
});

console.log(`Total: ${total}`)
console.log(`Tax: ${valueTax}`)










export {}