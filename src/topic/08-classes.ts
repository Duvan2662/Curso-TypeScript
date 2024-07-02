

export class Persona {
    public name:string;
    private address: string;

    constructor(){
        this.name = 'Duvan';
        this.address = 'Bogota'
    }
}


const iroman = new Persona();
console.log(iroman);
