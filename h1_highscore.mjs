import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1=parseFloat(await userInput.question('Geef een getal in: '));
let getal2=parseFloat(await userInput.question('Geef een tweede getal in: '));
let getal3=parseFloat(await userInput.question('Geef een derde getal in: '));
let getal4=parseFloat(await userInput.question('Geef een vierde getal in: '));
let getal5=parseFloat(await userInput.question('Geef een vijfde getal in: '));

let max;
let gelukt=true;

if(getal1>getal2&&getal1>getal3&&getal1>getal4&&getal1>getal5){
    max=getal1
}else if(getal2>getal1&&getal2>getal3&&getal2>getal4&&getal2>getal5){
    max=getal2
}else if(getal3>getal1&&getal3>getal2&&getal3>getal4&&getal3>getal5){
    max=getal3
}else if(getal4>getal1&&getal4>getal2&&getal4>getal3&&getal4>getal5){
    max=getal4
}else if(getal5>getal1&&getal5>getal2&&getal5>getal4&&getal5>getal3){
    max=getal5
}else{
    gelukt=false;
    console.log('\nEr is geen maximum.\n');
}

if(gelukt){
    console.log('\nHet maximum is '+max+'.\n');
}

let min;
let gelukt2=true
if(getal1<getal2&&getal1<getal3&&getal1<getal4&&getal1<getal5){
    min=getal1
}else if(getal2<getal1&&getal2<getal3&&getal2<getal4&&getal2<getal5){
    min=getal2
}else if(getal3<getal1&&getal3<getal2&&getal3<getal4&&getal3<getal5){
    min=getal3
}else if(getal4<getal1&&getal4<getal2&&getal4<getal3&&getal4<getal5){
    min=getal4
}else if(getal5<getal1&&getal5<getal2&&getal5<getal4&&getal5<getal3){
    min=getal5
}else{
    gelukt2=false;
    console.log('Er is geen minimum.\n');
}

if(gelukt2){
    console.log('Het minimum is '+min+'.\n');
}

let gemiddelde=(getal1+getal2+getal3+getal4+getal5)/5
console.log('Het gemiddelde is '+gemiddelde+('.\n'));

process.exit();
