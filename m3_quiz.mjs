import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Welkom bij TheQuiz. Beantwoord volgende 5 vragen:');
let vraag1=await userInput.question('Is een spin een insect?: ');
let score=0
if(vraag1=='nee'){
    console.log('Goed antwoord!\n');
    score++;
}else{
    console.log('Fout, het antwoord was nee.\n');
}
let vraag2=await userInput.question('Wie is de president van de VS?: ');
if(vraag2=='Joe Biden'){
    console.log('Goed antwoord!\n');
    score++;
}else{
    console.log('Fout, het antwoord was Joe Biden.\n');
}
let vraag3=await userInput.question('In welk werelddeel ligt Groenland?: ');
if(vraag3=='Noord-Amerika'){
    console.log('Goed antwoord!\n');
    score++;
}else{
    console.log('Fout, het antwoord was Noord-Amerika.\n');
}
let vraag4=parseFloat(await userInput.question('Hoeveel poten heeft een mier?: '));
if(vraag4==6){
    console.log('Goed antwoord!\n');
    score++
}else{
    console.log('Fout, het antwoord was 6.\n')
}
let vraag5=await userInput.question('Wat is de hoofdstad van België?: ');
if(vraag5=='Brussel'){
    console.log('Goed antwoord!\n');
    score++;
}else{
    console.log('Fout, het antwoord was Brussel.\n')
}
console.log('Je hebt '+score+' van de 5 vragen juist beantwoord.');
process.exit();
