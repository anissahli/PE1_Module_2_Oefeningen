import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1= parseFloat(await userInput.question('Geef een getal in: '));
let getal2= parseFloat(await userInput.question('Geef een tweede getal in: '));

let watDoen= await userInput.question('Wil je deze twee getallen:\n1.optellen\n2.aftrekken\n3.vermenigvuldigen\n4.delen\n')

switch(watDoen){
    case '1':
        console.log(getal1+getal2);
        break;
    case '2':
        console.log(getal1-getal2);
        break;
    case '3':
        console.log(getal1*getal2);
        break;
    case '4':
        console.log(getal1/getal2);
        break;
    default:
        console.log('Sorry, dit is geen geldige operatie');
}


process.exit();
