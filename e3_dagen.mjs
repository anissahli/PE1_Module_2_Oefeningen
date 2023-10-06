import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let maand=await userInput.question('Geef een maand in: ') 
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
        console.log(maand+' telt 28 of 29 dagen.');
        break;
}
process.exit();


    
    

