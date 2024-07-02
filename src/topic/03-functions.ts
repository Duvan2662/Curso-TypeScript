
//Funcion con tipado
function suma(num1:number, num2:number):number {
    return num1+num2;
}

//Funcion flecha con tipado
const suma2 = (num1:number, num2:number):string => {
    return `${num1 + num2}`;
}

//Funcion flecha con tipado
const suma3 = (num1:number, num2:number) => num1+num2;


//num1 = Obligatorio
//num2 = Opcional sin valor por defecto
//num3 = Opcional con valor por defecto
function multiplicar(num1:number,num2?:number,base:number=3) {
    return num1 * base
}

const resultado: number = suma(1,2);
const resultado2: string = suma2(3,4);
const resultado3: number = suma3(5,6);
const resultado4: number = multiplicar(5);

console.log({
    resultado,
    resultado2,
    resultado3,
    resultado4
});






//Funcion que recibe objetos
const curarPersonaje = (personaje:Personaje, curacion:number) => {
    personaje.vida += curacion;
}

//La interface nos ayuda a tipar objetos 
interface Personaje {
    nombre: string;
    vida: number;
    mensajeVida : () => void;
}

//Declaracion del objeto con la interface
const personaje1 : Personaje = {
    nombre: 'Halo',
    vida: 100,
    mensajeVida () {
        console.log(`Puntos de vida: ${this.vida}`);
        
    }
}


personaje1.mensajeVida();
curarPersonaje(personaje1,10);
personaje1.mensajeVida();










export {};