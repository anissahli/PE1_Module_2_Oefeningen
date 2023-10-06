import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaartal=parseFloat(await userInput.question('Geef een jaartal in: '));

if(jaartal%400==0||(jaartal%4==0 && jaartal%10!==0)){
    console.log('Dit is een schrikkeljaar.');
}else{
    console.log('Dit is geen schrikkeljaar.')
}

process.exit();
