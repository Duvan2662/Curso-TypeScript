
// Funcion generica

export const cualEsMiTipo = <T> (argumento: T):T => {


    return argumento;
}

let soyString = cualEsMiTipo<string>('Hola mundo');
let soyNumero = cualEsMiTipo<number>(100);
let soyArreglo = cualEsMiTipo<number[]>([1,2,3,4,5,6]);

console.log(soyString.split(' '));
console.log(soyNumero.toFixed());
console.log(soyArreglo.join('-'));




