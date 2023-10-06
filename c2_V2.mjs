import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand=await userInput.question('Geef een maand in: ');
let jaartal=parseFloat(await userInput.question('Geef een jaartal in: '));

switch(maand){
    case 'April':
    case 'Juni':
    case 'September':
    case 'November':
        console.log(maand+' telt 30 dagen.');
        break;
    case 'Januari':
    case 'Maart':
    case 'Mei':
    case 'Juli':
    case 'Augustus':
    case 'Oktober':
    case 'December':
        console.log(maand+' telt 31 dagen.');
        break;
    case 'Februari':
        if(jaartal%400==0||(jaartal%4==0 && jaartal%10!==0)){
            console.log(maand+' telt 29 dagen.');
        }else{
            console.log(maand+' telt 28 dagen.');
        }    
        break;
}
process.exit();
