

export class Persona {
    // public name:string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string = 'No address'
    ){}


}


export class Heroe extends Persona {

    constructor(
        public nombreSuper: string, 
        public age: number,
        public realName: string,
    ) {
        super(realName,'Miami')
        
    }
}


const iroman = new Heroe('Iroman',43,'TonyStarck');

console.log(iroman);
