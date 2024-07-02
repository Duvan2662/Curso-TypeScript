const habilidades: string[] = ['Correr','Pensar','Perseverante'];




interface Caracter {
    nombre: string;
    vida: number;
    habilidades: string[];
    pais?: string;
}

const personaje:Caracter = {
    nombre: 'Halo',
    vida: 100,
    habilidades : ['Correr', 'Pensar']
} 


personaje.pais = 'Estados Unidos'

console.table(personaje);





export{}