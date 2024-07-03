

export class Persona {
    // public name:string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string = 'No address'
    ){}


}


// export class Heroe extends Persona {

//     constructor(
//         public nombreSuper: string, 
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName,'Miami')
        
//     }
// }

export class Heroe{

    constructor(
        public nombreSuper: string, 
        public age: number,
        public realName: string,
        public persona:Persona
    ) { 
    }
} 

const tony = new Persona('Tony Stark','Miami')
const iroman = new Heroe('Iroman',43,'TonyStarck',tony);

console.log(iroman);
