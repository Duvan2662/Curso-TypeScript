//Destructuracion de Objetos
interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Al ritmo de la vida",
    details: {
        author: "Joes YWC",
        year: 2015
    }
}

//song:cancion -> es como un alias que se le pone a la propiedad
const {song:cancion, songDuration:duracion, details:detalles} = audioPlayer;
const {author:autor}= detalles;
// console.log(`Song: ${cancion}`);
// console.log(`Duration: ${duracion}`);
// console.log(`Author: ${autor}`);



//Destructuracion de Arreglos
const dbz:string[] = ['Goku','Vegeta','Gohan'];
const [p1,p2,gohan] = dbz;
console.log(`Personaje 3: ${gohan}`);

//En caso de que no quiera asignar variables se separa por ,
const [,,gohan2] = dbz;
console.log(`Personaje 3: ${gohan2}`);

//Valor por defecto  en caso que el arreglo no tenga el personaje 
const [p11,p22,gohan3,p4='No existe personaje'] = dbz
console.log(`Personaje 3: ${p4}`);







export {};