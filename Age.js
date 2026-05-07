const prompt = require("prompt-sync")();
const age= prompt("What is your age? ")

//if(input <= 12){
if(age > 0 &&  age < 12 ){
console.log("you are a baby ");
   }else if(age > 0 && age < 18){
console.log("You a Teenager")
 }else if(age > 0 && age > 18){
console.log("You an Adult,so behave like one")
 }else{
console.log ("invaild age,try next time ") 
 }


