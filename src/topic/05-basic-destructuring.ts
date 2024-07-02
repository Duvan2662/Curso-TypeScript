
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
const {author:autor}= detalles
console.log(`Song: ${cancion}`);
console.log(`Duration: ${duracion}`);
console.log(`Author: ${autor}`);



export {};