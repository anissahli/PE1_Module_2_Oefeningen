import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Kies een artiest: \n 1. Ed Sheeran \n 2. Central Cee \n 3. Adele \n 4. Nej");
let keuze= await userInput.question('Geef je keuze in: ');

switch(keuze){
    case '1':
        console.log('Je koos voor Ed Sheeran. \nHij is de artiest achter de hit: Perfect');
        break;
    case '2':
        console.log('Je koos voor Central Cee. \nHij is de artiest achter de hit: Sprinter');
        break;
    case '3':
        console.log('Je koos voor Adele. \nZij is de artiest achter de hit: Hello');
        break;
    case '4':
        console.log('Je koos voor Nej. \nZij is de artiest achter de hit: Paro');
        break;
    default:
        console.log('Niet geldig.');
}

process.exit();


