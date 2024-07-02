

export class Persona {
    // public name:string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string = 'No address'
    ){}
}


const iroman = new Persona('TonyStarck','Miami');

console.log(iroman);
